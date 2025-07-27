import React from "react";
import { useState } from "react";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import KeyColor from '../data/keyColor.ts'

function LocksmithPage(props)
{
    const [keyColor, setKeyColor] = useState(null);
    const [experience, setExperience] = useState(0);

    const allKeyColors = Object.values(KeyColor);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <SingleChoiceList
                title="Best lock color:"
                options={allKeyColors}
                onChange={setKeyColor}
            />
            <NumberInput
                title="Experience (locks)"
                onChange={setExperience}
            />
        </div>
    );
}

export default LocksmithPage;
