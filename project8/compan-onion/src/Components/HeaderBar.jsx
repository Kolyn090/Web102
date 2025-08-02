import React from "react";
import '../Styles/HideIfNarrow.css'

function HeaderBar(props)
{
    return (
        <div style={{...props.style}}>
            <SiteLogo />
            <HeaderOptionsPanel />
        </div>
    )
}

function SiteLogo()
{
    return (
        <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                gap: 25,
                width: 200,
                height: 50
                // background: 'red'
            }}>
            <img src="./img/Componion.png" 
            style={{height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    position: 'absolute',
                    left: 20
            }}
        />
        <img src="./img/logo-text.png" 
            style={{left: 80,
                    width: 200,
                    objectFit: 'contain',
                    display: 'block',
                    position: 'absolute',
                    top: 15
            }}
        />
        </div>
    );
}

function HeaderOptionsPanel()
{
    return (
        <div style={{
            top: 10,
            right: 20,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            gap:5
        }}>
            <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                height: 35
            }}>
                <img src="./img/onion/onion.png" style={{height: 35}}/>
                <span className="hide_if_narrow" style={{ fontSize: '16px', color: '#333' }}>Home</span>
            </button>

            <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                height: 35
            }}>
                <img src="./img/onion/onion (1).png" style={{height: 35}}/>
                <span className="hide_if_narrow" style={{ fontSize: '16px', color: '#333' }}>Create Post</span>
            </button>
        </div>
    );
}

export default HeaderBar;
