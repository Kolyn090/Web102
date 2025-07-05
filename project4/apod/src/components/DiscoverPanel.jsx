import React from "react";
import "../style/HomePage.css"

function DiscoverPanel(props)
{
    return (
        <div style={{
            ...props.style,
            height: props.hasDiscover ? '100vh' : '50vh',
        }}>
            {props.hasDiscover ? (
            <Discovered/>
            ) : (
            <Greeting setHasDiscover={props.setHasDiscover} />
            )}
        </div>
    );
}

function Greeting(props)
{
    return (
        <div style={{
            position: 'fixed',      // fixes it relative to viewport
            top: '50%',             // halfway down the viewport
            left: '50%',            // halfway across the viewport
            transform: 'translate(-50%, -50%)',  // shift back by half its size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',}}>
            <h1>APOD</h1>
            <h2>View Astronomy Picture of the Day from NASA!</h2>
            <h2>💫✨🌕☀️🕳️🛰️☄️🚀🌌</h2>
            <button className="button" onClick={() => props.setHasDiscover(true)}>Discover</button>
        </div>
    );
}

function Discovered(props)
{
    return (
        <div style={{
            position: 'fixed',      // fixes it relative to viewport
            top: '50%',             // halfway down the viewport
            left: '50%',            // halfway across the viewport
            transform: 'translate(-50%, -50%)',  // shift back by half its size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',}}>
            <h1>APOD</h1>
            <h2>Message</h2>
            <button className="button">Discover</button>
        </div>
    );
}

export default DiscoverPanel;
