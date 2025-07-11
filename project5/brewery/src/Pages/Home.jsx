import React from "react";
import { useEffect, useState } from "react";
import OptionsPanel from "../Components/OptionsPanel";
import StatsPanel from "../Components/StatsPanel";
import SearchPanel from "../Components/SearchPanel";

const breweriesAmount = 10;

function HomePage(props)
{
    const [list, setList] = useState(null);

    useEffect(() => {
        const getBreweries = async () => {
        const response = await fetch(
            `https://api.openbrewerydb.org/v1/breweries?per_page=${breweriesAmount}`
        )
        const json = await response.json();
        setList(json);
        }
    
        getBreweries().catch(console.error)
    }, []);
    
    useEffect(() => {
        if (list) {
        console.log(list);
        }
    }, [list]);

    if (!list) return <p>Loading...</p>;
    
    return (
        <div>
            <OptionsPanel style={{
                backgroundColor: 'rgb(214, 216, 93)', 
                width: '25%', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0
            }}/>
            <div style={{
                width: '73%',
                height: '100vh',
                position: 'absolute',
                top: 0,
                right: 0
            }}>
                <StatsPanel style={{
                    backgroundColor: 'rgb(236, 237, 176)', 
                    width: '100%',
                    height: '15%',
                    position: 'absolute',
                    top: 0
                }}/>

                <SearchPanel style={{
                    backgroundColor: 'rgb(242, 192, 120)', 
                    width: '100%',
                    height: '73%',
                    position: 'absolute',
                    bottom: '10%'
                }}/>
            </div>
        </div>
    )
}

export default HomePage;
