import React from "react";
import { useState } from "react";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import Weapon from '../data/weapon.ts'
import BodyMass from "../data/bodyMass.ts";

function HitmanPage(props)
{
    const [weapon, setWeapon] = useState(null);
    const [bodyMass, setBodyMass] = useState(null);
    const [weightlifting, setWeightlifting] = useState(0);

    const allWeapons = Object.values(Weapon);
    const allBodyMasses = Object.values(BodyMass);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <SingleChoiceList
                title="Weapon:"
                options={allWeapons}
                onChange={setWeapon}
            />
            <SingleChoiceList
                title="Body Mass:"
                options={allBodyMasses}
                onChange={setBodyMass}
            />
            <NumberInput
                title="Weightlifting Record (kg): "
                onChange={setWeightlifting}
            />
        </div>
    );
}

export default HitmanPage;
