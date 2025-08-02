import React from "react";
import '../Styles/HideIfNarrow.css'
import OnionButton from "./OnionButton";

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
            <OnionButton 
                borderColor={'#ccc'}
                backgroundColor={'#fff'}
                height={35}
                onionId={0}
                textColor={'#333'}
                text={'Home'}
            />

            <OnionButton 
                borderColor={'#ccc'}
                backgroundColor={'#fff'}
                height={35}
                onionId={1}
                textColor={'#333'}
                text={'Create Post'}
            />
        </div>
    );
}

export default HeaderBar;
