import React from "react";
import BanListPanel from "../components/BanListPanel";
import DiscoverPanel from "../components/DiscoverPanel";
import HistoryPanel from "../components/HistoryPanel";
import { useState } from "react";

function HomePage(props)
{
    const [hasDiscover, setHasDiscover] = useState(false);

    return (
        <div>
            <BanListPanel style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                width: '25%', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                right: 0}}/>
            <DiscoverPanel style={{
                position: 'fixed',      // fixes it relative to viewport
                top: '50%',             // halfway down the viewport
                left: '50%',            // halfway across the viewport
                transform: 'translate(-50%, -50%)',  // shift back by half its size
                backgroundColor: 'rgba(0,0,0,0.8)',
                width: '45%',
                borderRadius: '15px'}}
                hasDiscover={hasDiscover}
                setHasDiscover={setHasDiscover}/>
            <HistoryPanel style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                width: '25%', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0}}/>
        </div>
    );
}

export default HomePage;
