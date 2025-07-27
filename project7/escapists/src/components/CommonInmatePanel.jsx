import React from "react";
import { useState } from "react";
import TextInput from "../components/TextInput.jsx";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";

function CommonInmatePanel({onNameChange, onYearsChange, onInmateChange, allInmates})
{
    const [name, setName] = useState('');
    const [years, setYears] = useState(0);
    const [selectedInmate, setSelectedInmate] = useState(null);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <TextInput
                title="Inmate Code (Name):"
                onChange={setName}
            />
            <NumberInput 
                title="Years in Prison:"
                onChange={setYears}
            />
            <SingleChoiceList
                title="Inmate:"
                options={allInmates}
                onChange={setSelectedInmate}
            />
        </div>
    );
}

export default CommonInmatePanel;
