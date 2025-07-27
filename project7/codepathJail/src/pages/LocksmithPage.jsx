import React, { useEffect } from "react";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import KeyColor from '../data/keyColor.ts'
import { useLocation } from 'react-router-dom';

function LocksmithPage(props)
{
    const allKeyColors = Object.values(KeyColor);
    const location = useLocation();
    const invitedInmate = location.state?.invitedInmate;

    useEffect(() => {
        if (invitedInmate) {
            props.setKeyColor(invitedInmate.lockColor);
            props.setExperience(invitedInmate.experience);
        }
    }, [invitedInmate]);

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
                initial={invitedInmate ? invitedInmate.lockColor : null}
            />
            <NumberInput
                title="Experience (locks)"
                onChange={props.setExperience}
                initial={invitedInmate ? invitedInmate.experience : 0}
            />
        </div>
    );
}

export default LocksmithPage;
