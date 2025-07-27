import React from "react";
import { useState } from "react";
import Inmate from '../data/inmate.ts' 
import { Outlet, Link } from 'react-router-dom';
import CommonInmatePanel from "../components/CommonInmatePanel.jsx";

function CreatePage(props)
{
    const [selectedInmate, setSelectedInmate] = useState(null);
    const [name, setName] = useState('');
    const [years, setYears] = useState(0);

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
                    <button>Hitman</button>
                </Link>

                <Link to="locksmith">
                    <button>Locksmith</button>
                </Link>

                <Link to="watchman">
                    <button>Watchman</button>
                </Link>
            </div>

            <Outlet/>

            <CommonInmatePanel 
                onNameChange={setName}
                onYearsChange={setYears}
                onInmateChange={setSelectedInmate}
                allInmates={allInmates}
            />
        </div>
    )
}

export default CreatePage;
