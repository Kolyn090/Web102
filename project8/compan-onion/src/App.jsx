import './Styles/App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimateBG from './Components/AnimateBG';
import HeaderBar from './Components/HeaderBar';
import PostsPage from './Pages/PostsPage';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <AnimateBG style={{
                    width: '5%', 
                    height: '100vh',
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                }}/>

                <HeaderBar style={{
                    width: '90%',
                    height: 50,
                    position: 'absolute',
                    top: 0,
                    left: '5%',
                    borderBottom: '2px solid gray',
                    boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                }}/>
                
                <AnimateBG style={{
                    width: '5%', 
                    height: '100vh',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}/>

                <PostsPage style={{
                    width: '90%', 
                    height: '95%',
                    position: 'absolute',
                    top: '5%',
                    left: '5%'
                }}/>
            </div>
        </Router>
    )
}

export default App
