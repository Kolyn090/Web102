import React from "react";
import BanButton from "./BanButton";
import "../style/HomePage.css"

function DiscoverPanel(props)
{
    const filtered = FilterDataWithBanList(props.data, props.banList);
    if (!props.item && props.hasDiscover && filtered.length === 0) return <p>No result...</p>;

    return (
        <div style={{
            ...props.style,
            height: props.hasDiscover && props.item ? '100vh' : '50vh',
        }}>
            {props.hasDiscover && props.item ? (
            <Discovered data={props.data}
                item={props.item}
                setItem={props.setItem}
                banList={props.banList}
                setBanList={props.setBanList}/>
            ) : (
            <Greeting setHasDiscover={props.setHasDiscover}
                data={props.data} 
                setItem={props.setItem}/>
            )}
        </div>
    );
}

function Greeting(props)
{
    return (
        <div style={{
            position: 'fixed',      // fixes it relative to viewport
            top: '50%',             // halfway down the viewport
            left: '50%',            // halfway across the viewport
            transform: 'translate(-50%, -50%)',  // shift back by half its size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',}}>
            <h1>APOD</h1>
            <h2>View Past Year's Astronomy Picture of the Day from NASA!</h2>
            <h2>💫✨🌕☀️🕳️🛰️☄️🚀🌌</h2>
            <button className="button" onClick={() => {
                props.setHasDiscover(true);
                GoToRandomItem(props.data, props.setItem)
            }}>🧑‍🚀Discover</button>
        </div>
    );
}

function Discovered(props)
{
    return (
        <div style={{
            position: 'fixed',      // fixes it relative to viewport
            top: '50%',             // halfway down the viewport
            left: '50%',            // halfway across the viewport
            transform: 'translate(-50%, -50%)',  // shift back by half its size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',}}>
            <h1>APOD</h1>
            <h3>{props.item ? props.item.title : "N/A"}</h3>
            {props.item && props.item.media_type === 'image' ? (
                <img src={props.item.url} alt={props.item.title} className="img"/>
            ) : (
                <p>Not supported media.</p>
            )}
            {
                props.item &&
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px'}}>
                    <BanButton text={props.item.date} banList={props.banList} setBanList={props.setBanList}></BanButton>
                    <BanButton text={props.item.copyright || "N/A"} banList={props.banList} setBanList={props.setBanList}></BanButton>
                    <BanButton text={props.item.service_version || "N/A"} banList={props.banList} setBanList={props.setBanList}></BanButton>
                </div>
            }
            <button className="button" onClick={() => GoToRandomItem(props.data, props.setItem, props.banList)}>🧑‍🚀Discover</button>
        </div>
    );
}

const GoToRandomItem = (data, setItem, banList) => {
    const filtered = FilterDataWithBanList(data, banList);
    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
    setItem(randomItem);
};

const FilterDataWithBanList = (data, banList) => {
    if (!banList || banList.length === 0)
    {
        return data;
    }
    return data.filter(item => {
        return !banList.includes(item.date || "N/A") && 
                !banList.includes(item.copyright || "N/A") && 
                !banList.includes(item.service_version || "N/A");
    });
};

export default DiscoverPanel;
