import React from "react";

function StatsPanel(props)
{
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <StatsInfo title="Test" subTitle="1"/>
            <StatsInfo title="Test" subTitle="2"/>
            <StatsInfo title="Test" subTitle="3"/>
        </div>
    );
}

function StatsInfo(props)
{
    return (
        <div>
            <h1 style={{margin:0, padding:5}}>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

export default StatsPanel;
