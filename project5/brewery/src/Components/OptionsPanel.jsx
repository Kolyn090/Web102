import React from "react";
import "../Style/HomePage.css"

function OptionsPanel(props)
{
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px'
        }}>
            <h1>brewery🍻</h1>
            <button className="option_button">🛹Dashboard</button>
            <button className="option_button">🔎Search</button>
            <button className="option_button">ℹ️About</button>
        </div>
    );
}

export default OptionsPanel;
