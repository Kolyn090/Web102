import React from "react";
import Inmate from '../data/inmate.ts' 

function HomePage(props)
{
    const allInmates = Object.values(Inmate);
    const inmateImagePath = '/assets/escapists/';
    const inmateImageUrls = allInmates.map(x => inmateImagePath + x + '.png');

    return (
        <div style={{
            flex: 1,
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            right: 0
        }}>
            <h2>This is the Codepath Jail,</h2>
            <p style={{ padding: '30px' }}>
                After days and nights spent planning your escape, you’ve decided that tonight is the perfect time. Now, all that’s left is to recruit a few inmates to help pull off your great breakout!
            </p>
            {
                inmateImageUrls.map((src, i) => (
                    <img key={i} src={src} 
                        style={{
                        width: '64px',      // double the original size
                        height: '64px',
                        imageRendering: 'pixelated',  // nearest neighbor scaling
                    }}></img>
                ))
            }
            <p>@ Spritesheet from game The Escapists, ripped by Kolyn090 (me).<br/>For educational purposes only, DO NOT SHARE.</p>
        </div>
    );
}

export default HomePage;
