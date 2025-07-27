import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage';
import OptionsPanel from './components/OptionsPanel';
import HitmanPage from './pages/HitmanPage';
import LocksmithPage from './pages/LocksmithPage';
import WatchmanPage from './pages/WatchmanPage';

function App() {
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
                        <Route path="/create" element={<CreatePage/>}>
                            <Route path="hitman" element={<HitmanPage/>} />
                            <Route path="locksmith" element={<LocksmithPage/>} />
                            <Route path="watchman" element={<WatchmanPage/>} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App
