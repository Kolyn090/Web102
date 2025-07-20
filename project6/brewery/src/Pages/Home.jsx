import React from "react";
import { useEffect, useState } from "react";
import OptionsPanel from "../Components/OptionsPanel";
import StatsPanel from "../Components/StatsPanel";
import SearchPanel from "../Components/SearchPanel";

const breweriesAmount = 100;

function HomePage(props)
{
    const [sourceData, setSourceData] = useState(null);
    const [renderData, setRenderData] = useState(null);
    const [typeInput, setTypeInput] = useState("");
    const [stateInput, setStateInput] = useState("");
    const [numOfAddr, setNumOfAddr] = useState(0);

    useEffect(() => {
        const getBreweries = async () => {
        const response = await fetch(
            `https://api.openbrewerydb.org/v1/breweries?per_page=${breweriesAmount}`
        )
        const json = await response.json();
            const usJson = json.filter(x=>x.country==="United States");
            setSourceData(usJson);
            setRenderData(usJson.slice(0, 10));
        }
    
        getBreweries().catch(console.error)
    }, []);
    
    useEffect(() => {
        if (sourceData) {
        console.log(sourceData);
        }
    }, [sourceData]);

    if (!sourceData) return <p>Loading...</p>;
    
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
                }}
                sourceData={sourceData}/>

                <SearchPanel style={{
                    backgroundColor: 'rgb(242, 192, 120)', 
                    width: '100%',
                    height: '73%',
                    position: 'absolute',
                    bottom: '10%'
                }}
                sourceData={sourceData}
                renderData={renderData}
                setRenderData={setRenderData}
                typeInput={typeInput}
                setTypeInput={setTypeInput}
                stateInput={stateInput}
                setStateInput={setStateInput}
                numOfAddr={numOfAddr}
                setNumOfAddr={setNumOfAddr}/>
            </div>
        </div>
    )
}

export default HomePage;
