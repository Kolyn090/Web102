import React from "react";
import '../Styles/Font.css'

function SubOnionProfile(props)
{
    return (
        <div style={{...props.style}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                gap: 25
            }}>
                <img
                    src="./img/minecraft_app_icon.png"
                    alt="Soybean"
                    style={{
                        width: '10%',
                        height: '10%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                        border: '10px solid white',
                }}/>
                <h2 style={{
                    fontSize: '4vw',
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: 'NotoSansSC-ExtraBold'
                }}>Minecraft</h2>
            </div>
        </div>
    );
}

export default SubOnionProfile;
