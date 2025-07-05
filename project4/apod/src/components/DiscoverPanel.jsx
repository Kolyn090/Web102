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
            <Discovered data={props.data}
                item={props.item}
                setItem={props.setItem}/>
            ) : (
            <Greeting setHasDiscover={props.setHasDiscover}
                data={props.data} 
                setItem={props.setItem}/>
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
            <h2>View Past Month Astronomy Picture of the Day from NASA!</h2>
            <h2>💫✨🌕☀️🕳️🛰️☄️🚀🌌</h2>
            <button className="button" onClick={() => {
                props.setHasDiscover(true);
                GoToRandomItem(props.data, props.setItem)
            }}>Discover</button>
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
            <h2>{props.item.title}</h2>
            {props.item.media_type === 'image' ? (
                <img src={props.item.url} alt={props.item.title} style={{ maxWidth: '100%' }} className="img"/>
            ) : (
                <p>Media type: {props.item.media_type}</p>
            )}
            <ul>
                <li><strong>Date:</strong> {props.item.date}</li>
                <li><strong>Copyright:</strong> {props.item.copyright || 'N/A'}</li>
                <li><strong>Service_Version:</strong> {props.item.service_version || 'N/A'}</li>
            </ul>
            <button className="button" onClick={() => GoToRandomItem(props.data, props.setItem)}>Discover</button>
        </div>
    );
}

const GoToRandomItem = (data, setItem) => {
    const randomItem = data[Math.floor(Math.random() * data.length)];
    setItem(randomItem);
};

export default DiscoverPanel;
