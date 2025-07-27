import React from "react";
import { useState } from "react";
import Drinker from "../data/drinker.ts";
import Vision from "../data/vision.ts";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";

function WatchmanPage(props)
{
    const [height, setHeight] = useState(0);
    const [drinker, setDrinker] = useState(null);
    const [vision, setVision] = useState(null);

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
                onChange={setDrinker}
            />
            <SingleChoiceList
                title="Vision:"
                options={allVisions}
                onChange={setVision}
            />
            <NumberInput
                title="Height: "
                onChange={setHeight}
            />
        </div>
    );
}

export default WatchmanPage;
