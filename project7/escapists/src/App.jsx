import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import OptionsPanel from './components/OptionsPanel';

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
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App
