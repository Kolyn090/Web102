import React from "react";

/*
    {
        "id": "5128df48-79fc-4f0f-8b52-d06be54d0cec",
        "name": "(405) Brewing Co",
        "brewery_type": "micro",
        "address_1": "1716 Topeka St",
        "address_2": null,
        "address_3": null,
        "city": "Norman",
        "state_province": "Oklahoma",
        "postal_code": "73069-8224",
        "country": "United States",
        "longitude": -97.46818222,
        "latitude": 35.25738891,
        "phone": "4058160490",
        "website_url": "http://www.405brewing.com",
        "state": "Oklahoma",
        "street": "1716 Topeka St"
    }
*/

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
            <StatsInfo title="Most Frequent Brewery Type" subTitle={getMostFrequent(props.sourceData, "brewery_type")}/>
            <StatsInfo title="Most Frequent State" subTitle={getMostFrequent(props.sourceData, "state")}/>
            <StatsInfo title="Most Frequent City" subTitle={getMostFrequent(props.sourceData, "city")}/>
        </div>
    );
}

function getMostFrequent(list, field) {
    const counts = {};

    for (const item of list) {
        const value = item[field];
        counts[value] = (counts[value] || 0) + 1;
    }

    let maxCount = 0;
    let mostFrequent = null;

    for (const [key, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = key;
        }
    }

    return mostFrequent;
}

function StatsInfo(props)
{
    return (
        <div>
            <h2 style={{margin:0, padding:5}}>{props.title}</h2>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

export default StatsPanel;
