import './Style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import OptionsPanel from './Components/OptionsPanel';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <OptionsPanel style={{
                    backgroundColor: 'rgb(214, 216, 93)', 
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
                        <Route path="/brewery/:id" element={ <DetailPage/> } />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App
