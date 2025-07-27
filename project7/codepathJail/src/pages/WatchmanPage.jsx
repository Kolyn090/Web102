import React from "react";
import Drinker from "../data/drinker.ts";
import Vision from "../data/vision.ts";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import { useLocation } from 'react-router-dom';

function WatchmanPage(props)
{
    const allDrinkers = Object.values(Drinker);
    const allVisions = Object.values(Vision);
    const location = useLocation();
    const invitedInmate = location.state?.invitedInmate;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <SingleChoiceList
                title="Drink:"
                options={allDrinkers}
                onChange={props.setDrinker}
                initial={invitedInmate ? invitedInmate.drink : null}
            />
            <SingleChoiceList
                title="Vision:"
                options={allVisions}
                onChange={props.setVision}
                initial={invitedInmate ? invitedInmate.vision : null}
            />
            <NumberInput
                title="Height (cm): "
                onChange={props.setHeight}
                initial={invitedInmate ? invitedInmate.height : 0}
            />
        </div>
    );
}

export default WatchmanPage;
