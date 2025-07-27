import React, { useState, useEffect } from "react";
import successCalculator from "../data/SuccessCalculator";
import { supabase } from "../database/client";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function SummaryPage(props)
{
    const [successRate, setSuccessRate] = useState(0);
    const [invitedInmates, setInvitedInmates] = useState([]);
    const [successRateHint, setSuccessRateHint] = useState("");
    const [renderPieData, setRenderPieData] = useState([]);
    const [renderBarData, setRenderBarData] = useState([]);
    const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

    const fetchInmates = async () => {
        const { data, error } = await supabase
            .from("Invited Inmates") // change to match your table name
            .select()
            .order('created_at', { ascending: true });

            if (error) {
                console.error('Error fetching inmates:', error);
                return;
            }

        setInvitedInmates(data);
    };

    useEffect(() => {
        fetchInmates();
    }, []);

    useEffect(() => {
        var rate = successCalculator(invitedInmates);
        setSuccessRate(rate);
        setSuccessRateHint(getSuccessRateHint(rate));

        const items = invitedInmates.map(mate => {
            return {id: mate.id, helperType: mate.helperType}
        });
        const pieCounts = items.reduce((acc, item) => {
            acc[item.helperType] = (acc[item.helperType] || 0) + 1;
            return acc;
        }, {});
        const pieData = Object.entries(pieCounts).map(([helperType, value]) => ({
            name: helperType,
            value
        }));
        setRenderPieData(pieData);

        const numbers = invitedInmates.map(mate => mate.years);
        const barCounts = numbers.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
        const barData = Object.entries(barCounts).map(([key, value]) => ({
            name: key,
            count: value
        }));
        setRenderBarData(barData);
    }, [invitedInmates])

    return (
        <div>
            <h1>Breakout Success Rate: {successRate.toFixed(2)}%</h1>
            <p>{successRateHint}</p>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: '25px',
                marginBottom: '20px'
            }}>
                <PieChart width={400} height={300}>
                    <Pie
                        data={renderPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {renderPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>

                <BarChart
                    width={500}
                    height={300}
                    data={renderBarData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'Years in prison', position: 'insideBottom', offset: -15 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        verticalAlign="bottom"
                        height={20}
                    />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
}

const getSuccessRateHint = (rate) => {
    if (rate >= 100)
    {
        return "Whoa, you will get out of this jail tonight!";
    }
    else if (rate >= 90)
    {
        return "You are very close to a guaranteed success.";
    }
    else if (rate >= 75)
    {
        return "Your chances look promising. Just a bit more effort!";
    }
    else if (rate >= 50)
    {
        return "It's a risky move, but it might work.";
    }
    else if (rate >= 25)
    {
        return "You might want to rethink your plan.";
    }
    else if (rate > 0)
    {
        return "This is probably not going to work...";
    }
    else
    {
        return "You're not escaping tonight. Back to the drawing board.";
    }
}

export default SummaryPage;
