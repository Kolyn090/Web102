import React from "react";

function HistoryPanel(props)
{
    return (
        <div style={props.style}>
            <h2 style={{ color: 'white' }}>History</h2>
            <h3 style={{ color: 'white' }}>Astronomy picture seen so far.</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px'
            }}
            className="scrollPanel">
                {
                    props.seenItems.map((item, index) => (
                    <RecordItem
                        key={index}
                        item={item}
                    />
                    ))
                }
            </div>
        </div>
    );
}

function RecordItem(props)
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {props.item && props.item.media_type === 'image' ? (
                <img src={props.item.url} alt={props.item.title} className="smallImg"/>
            ) : (
                <p>Not supported media.</p>
            )}
            <p>{props.item ? props.item.title : "N/A"}</p>
        </div>
    );
}

export default HistoryPanel;
