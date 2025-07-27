import React from "react";
import { useState } from "react";
import TextInput from "../components/TextInput.jsx";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";

function CommonInmatePanel(props)
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <TextInput
                title="Inmate Code (Name):"
                onChange={props.setName}
            />
            <NumberInput 
                title="Years in Prison:"
                onChange={props.setYears}
            />
            <SingleChoiceList
                title="Inmate:"
                options={props.allInmates}
                onChange={props.setSelectedInmate}
            />
        </div>
    );
}

export default CommonInmatePanel;
