import React from "react";
import OnionButton from "./OnionButton";
import { Link } from 'react-router-dom';

function LinkOnionButton(props)
{
    return (
        <Link to={props.to}>
            <OnionButton {...props}/>
        </Link>
    );
}

export default LinkOnionButton;
