import React from "react";
import UnBanButton from "./UnBanButton";

function UnBanListPanel(props)
{
    return (
        <div style={props.style}>
            <h2 style={{ color: 'white' }}>Ban List</h2>
            <h3 style={{ color: 'white' }}>Select an attribute in your listing to ban it.</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
            }}>
                {
                    props.banList.map(banned => (
                    <UnBanButton
                        key={banned}
                        text={banned}
                        banList={props.banList}
                        setBanList={props.setBanList}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default UnBanListPanel;
