import React from "react";
import { useState, useEffect } from "react";
import Inmate from '../data/inmate.ts' 
import { Outlet, Link } from 'react-router-dom';
import CommonInmatePanel from "../components/CommonInmatePanel.jsx";
import { supabase } from "../database/client.js";
import HelperType from "../data/helperType.ts";

function CreatePage(props)
{
    const inviteInmate = async (event) => {
        event.preventDefault();
        await supabase
            .from('Invited Inmates')
            .insert({
                name: props.name,
                years: parseInt(props.years),
                inmate: props.selectedInmate,
                weapon: props.weapon,
                bodyMass: props.bodyMass,
                weightlifting: parseFloat(props.weightlifting),
                lockColor: props.keyColor,
                experience: parseInt(props.experience),
                drink: props.drink,
                vision: props.vision,
                height: parseFloat(props.height),
                helperType: props.helperType
            })
            .select();
        
        window.location = "/squad"
    };

    const allInmates = Object.values(Inmate);
    const inmateImagePath = '/assets/escapists/';
    const inmateImageUrls = allInmates.map(x => inmateImagePath + x + '.png');

    return (
        <div>
            <div style={{
                marginBottom: '-60px'
            }}>
                <h2 style={{
                    marginBottom: '-10px'
                }}>Invite a New Inmate</h2>
                {
                    inmateImageUrls.map((src, i) => (
                        <img key={i} src={src} 
                            style={{
                            width: '32px',      // double the original size
                            height: '32px',
                            imageRendering: 'pixelated',  // nearest neighbor scaling
                        }}></img>
                    ))
                }
            </div>

            <h3>Select the type of helper you are looking for: </h3>
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: '25px',
                marginTop: '-40px',
                marginBottom: '20px'
            }}>
                <Link to="hitman">
                    <button onClick={() => props.setHelperType(HelperType.Hitman)}>Hitman</button>
                </Link>

                <Link to="locksmith">
                    <button onClick={() => props.setHelperType(HelperType.Locksmith)}>Locksmith</button>
                </Link>

                <Link to="watchman">
                    <button onClick={() => props.setHelperType(HelperType.Watchman)}>Watchman</button>
                </Link>
            </div>

            <Outlet/>

            <CommonInmatePanel 
                setName={props.setName}
                setYears={props.setYears}
                setSelectedInmate={props.setSelectedInmate}
                allInmates={allInmates}
            />

            <button 
                style={{marginTop: '-40px'}}
                onClick={inviteInmate}
            >Invite</button>
        </div>
    )
}

export default CreatePage;
