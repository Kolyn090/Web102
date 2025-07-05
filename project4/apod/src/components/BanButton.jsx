import React from "react";

function BanButton(props)
{
    const AddToBan = () => {
        if (!props.banList.includes(props.text))
        {
            const newBanList = [...props.banList, props.text];
            props.setBanList(newBanList);
        }
    }
    return (
        <button style={{backgroundColor: 'white'}} onClick={AddToBan}>{props.text}</button>
    );
}

export default BanButton;
