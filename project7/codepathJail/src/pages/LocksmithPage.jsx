import React from "react";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import KeyColor from '../data/keyColor.ts'

function LocksmithPage(props)
{
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
                onChange={props.setKeyColor}
            />
            <NumberInput
                title="Experience (locks)"
                onChange={props.setExperience}
            />
        </div>
    );
}

export default LocksmithPage;
