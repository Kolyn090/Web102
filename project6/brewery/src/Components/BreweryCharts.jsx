import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BreweryCharts({ breweries }) {
    // Aggregate count by brewery_type
    const countByType = breweries.reduce((acc, brewery) => {
        const type = brewery.brewery_type || 'Unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // Aggregate count by state
    const countByState = breweries.reduce((acc, brewery) => {
        const state = brewery.state || 'Unknown';
        acc[state] = (acc[state] || 0) + 1;
        return acc;
    }, {});

    // Convert objects to array format for recharts
    const dataByType = Object.entries(countByType).map(([key, value]) => ({
        category: key,
        count: value,
    }));

    const dataByState = Object.entries(countByState).map(([key, value]) => ({
        category: key,
        count: value,
    }));

    return (
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 300 }}>
            <h3>Breweries by Type</h3>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByType} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="category" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
        </div>

        <div style={{ flex: 1, minWidth: 300 }}>
            <h3>Breweries by State</h3>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByState} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="category" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}

export default BreweryCharts;
