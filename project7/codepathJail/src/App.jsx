import './styles/App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage';
import OptionsPanel from './components/OptionsPanel';
import HitmanPage from './pages/HitmanPage';
import LocksmithPage from './pages/LocksmithPage';
import WatchmanPage from './pages/WatchmanPage';
import SquadPage from './pages/SquadPage';
import DetailPage from './pages/DetailPage'
import SummaryPage from './pages/SummaryPage'
import EditPage from './pages/EditPage';

function App() {
    const [name, setName] = useState('');
    const [years, setYears] = useState(0);
    const [selectedInmate, setSelectedInmate] = useState(null);
    const [weapon, setWeapon] = useState(null);
    const [bodyMass, setBodyMass] = useState(null);
    const [weightlifting, setWeightlifting] = useState(0);
    const [keyColor, setKeyColor] = useState(null);
    const [experience, setExperience] = useState(0);
    const [height, setHeight] = useState(0);
    const [drinker, setDrinker] = useState(null);
    const [vision, setVision] = useState(null);
    const [helperType, setHelperType] = useState(null);

    const inmateProps = {
        name, setName,
        years, setYears,
        selectedInmate, setSelectedInmate,
        weapon, setWeapon,
        bodyMass, setBodyMass,
        weightlifting, setWeightlifting,
        keyColor, setKeyColor,
        experience, setExperience,
        height, setHeight,
        drinker, setDrinker,
        vision, setVision,
        helperType, setHelperType
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <OptionsPanel style={{
                    backgroundColor: 'rgba(75, 75, 75, 1)', 
                    width: '25%', 
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}/>
                <main style={{ 
                        flex: 1,
                        width: '73%',
                        height: '100vh',
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/create" element={<CreatePage {...inmateProps}/>}>
                            <Route path="hitman" element={<HitmanPage {...inmateProps}/>} />
                            <Route path="locksmith" element={<LocksmithPage {...inmateProps}/>} />
                            <Route path="watchman" element={<WatchmanPage {...inmateProps}/>} />
                        </Route>
                        <Route path="/squad" element={<SquadPage/>} />
                        <Route path="inmate/:id" element={<DetailPage/>} />
                        <Route path="edit/:id" element={<EditPage {...inmateProps}/>}>
                            <Route path="hitman" element={<HitmanPage {...inmateProps}/>} />
                            <Route path="locksmith" element={<LocksmithPage {...inmateProps}/>} />
                            <Route path="watchman" element={<WatchmanPage {...inmateProps}/>} />
                        </Route>
                        <Route path="summary" element={<SummaryPage/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App
