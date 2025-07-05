import React from "react";

function UnBanButton(props)
{
    const RemoveFromBan = () => {
        const newBanList = props.banList.filter(item => item !== props.text);
        props.setBanList(newBanList);
    };

    return (
        <button style={{backgroundColor: 'gray'}} onClick={RemoveFromBan}>{props.text}</button>
    );
}

export default UnBanButton;
