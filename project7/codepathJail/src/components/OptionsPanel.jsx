import React from "react";
import { Link } from 'react-router-dom';
import '../styles/index.css'

function OptionsPanel(props)
{
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '25px',
            padding: '15px'
        }}>
            <Link to="/" className="button-link">
                Jail
            </Link>
            <Link to="/create" className="button-link">
                Invite Inmate
            </Link>
            <Link to="/squad" className="button-link">
                Squad
            </Link>
        </div>
    );
}

export default OptionsPanel;
