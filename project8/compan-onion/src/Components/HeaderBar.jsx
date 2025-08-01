import React from "react";

function HeaderBar(props)
{
    return (
        <div style={{...props.style}}>
            <img src="./img/Componion.png" 
                style={{height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'absolute',
                        left: 20
                }}
            />
            <img src="./img/logo-text.png" 
                style={{height: '50%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'absolute',
                        left: 70,
                        top: 10
                }}
            />

            <img src="./img/great_again.png" 
                style={{height: '70%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'absolute',
                        right: 20,
                        top: 10
                }}
            />
        </div>
    )
}

export default HeaderBar;
