import React from "react";
import Drinker from "../data/drinker.ts";
import Vision from "../data/vision.ts";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";

function WatchmanPage(props)
{
    const allDrinkers = Object.values(Drinker);
    const allVisions = Object.values(Vision);

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
            />
            <SingleChoiceList
                title="Vision:"
                options={allVisions}
                onChange={props.setVision}
            />
            <NumberInput
                title="Height (cm): "
                onChange={props.setHeight}
            />
        </div>
    );
}

export default WatchmanPage;
