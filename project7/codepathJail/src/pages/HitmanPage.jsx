import React, { useEffect } from "react";
import NumberInput from "../components/NumberInput.jsx";
import SingleChoiceList from "../components/SingleChoiceList.jsx";
import Weapon from '../data/weapon.ts'
import BodyMass from "../data/bodyMass.ts";
import { useLocation } from 'react-router-dom';

function HitmanPage(props)
{
    const allWeapons = Object.values(Weapon);
    const allBodyMasses = Object.values(BodyMass);
    const location = useLocation();
    const invitedInmate = location.state?.invitedInmate;

    useEffect(() => {
        if (invitedInmate) {
            props.setWeapon(invitedInmate.weapon);
            props.setBodyMass(invitedInmate.bodyMass);
            props.setWeightlifting(invitedInmate.weightlifting);
        }
    });

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
                onChange={props.setWeapon}
                initial={invitedInmate ? invitedInmate.weapon : null}
            />
            <SingleChoiceList
                title="Body Mass:"
                options={allBodyMasses}
                onChange={props.setBodyMass}
                initial={invitedInmate ? invitedInmate.bodyMass : null}
            />
            <NumberInput
                title="Weightlifting Record (kg): "
                onChange={props.setWeightlifting}
                initial={invitedInmate ? invitedInmate.weightlifting : 0}
            />
        </div>
    );
}

export default HitmanPage;
