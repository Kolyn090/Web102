import './Styles/App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimateBG from './Components/AnimateBG';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <AnimateBG style={{
                    width: '10%', 
                    height: '100vh',
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }}/>
                
                <AnimateBG style={{
                    width: '10%', 
                    height: '100vh',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}/>
            </div>
        </Router>
    )
}

export default App
