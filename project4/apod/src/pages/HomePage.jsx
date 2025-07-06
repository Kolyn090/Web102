import React from "react";
import UnBanListPanel from "../components/UnBanListPanel";
import DiscoverPanel from "../components/DiscoverPanel";
import HistoryPanel from "../components/HistoryPanel";
import { useEffect, useState } from "react";

function HomePage(props)
{
    const [hasDiscover, setHasDiscover] = useState(false);
    const [data, setData] = useState(null);
    const [item, setItem] = useState(null);
    const [banList, setBanList] = useState([]);
    const [seenItems, setSeenItems] = useState([]);

    const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
    
    useEffect(() => {
        const startDate = getLastYearDate();
        const endDate = getTodayDate();
        fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${nasaApiKey}`)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error(err));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <UnBanListPanel style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                width: '25%', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                right: 0}}
                banList={banList}
                setBanList={setBanList}/>
            <DiscoverPanel style={{
                position: 'fixed',      // fixes it relative to viewport
                top: '50%',             // halfway down the viewport
                left: '50%',            // halfway across the viewport
                transform: 'translate(-50%, -50%)',  // shift back by half its size
                backgroundColor: 'rgba(0,0,0,0.8)',
                width: '45%',
                borderRadius: '15px'}}
                hasDiscover={hasDiscover}
                setHasDiscover={setHasDiscover}
                data={data}
                item={item}
                setItem={setItem}
                banList={banList}
                setBanList={setBanList}
                seenItems={seenItems}
                setSeenItems={setSeenItems}/>
            <HistoryPanel style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                width: '25%', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0}}
                seenItems={seenItems}/>
        </div>
    );
}

function getLastMonthDate() {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    return today.toISOString().slice(0, 10);
}

function getLastYearDate() {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 1);
    return today.toISOString().slice(0, 10);
}

function getTodayDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10); // "YYYY-MM-DD"
}

export default HomePage;
