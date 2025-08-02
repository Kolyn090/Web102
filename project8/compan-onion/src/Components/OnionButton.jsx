import React from "react";
import "../Styles/HideIfNarrow.css"

const onionId2Image = (id) => {
    switch (id)
    {
        case 0:
            return "./img/onion/onion.png";
        case 1:
            return "./img/onion/onion (1).png";
        case 2:
            return "./img/onion/onion (2).png";
        case 3:
            return "./img/onion/onion (3).png";
        case 4:
            return "./img/onion/onion (4).png";
        case 5:
            return "./img/onion/onion (5).png";
    }
};

function OnionButton(props)
{
    return (
        <button style={{
            ...props.style,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: `1px solid ${props.borderColor}`,
            borderRadius: '6px',
            backgroundColor: props.backgroundColor,
            cursor: 'pointer',
            height: props.height
            }}
            onClick={props.onClick}
        >
            <img src={onionId2Image(props.onionId)} style={{height: props.height}}/>
            <span className="hide_if_narrow" style={{ fontSize: '16px', color: props.textColor }}>
                {props.text}
            </span>
        </button>
    );
}

export default OnionButton;
