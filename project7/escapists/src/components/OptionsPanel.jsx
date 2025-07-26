import React from "react";

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
            <button> Jail </button>
            <button> Invite Inmate </button>
            <button> Squad </button>
        </div>
    );
}

export default OptionsPanel;
