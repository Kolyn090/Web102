import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import CommonInmatePanel from "../components/CommonInmatePanel.jsx";
import { supabase } from "../database/client";
import Inmate from '../data/inmate.ts' 
import HelperType from "../data/helperType.ts";

function EditPage(props)
{
    const { id } = useParams();
    const allInmates = Object.values(Inmate);

    const [invitedInmate, setInvitedInmate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEntry() {
        setLoading(true);
        const { data, error } = await supabase
            .from('Invited Inmates') 
            .select('*')
            .eq('id', id) 
            .single();

        if (error) setError(error);
        else setInvitedInmate(data);

        setLoading(false);
        }

        if (id) {
            fetchEntry();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!invitedInmate) return <p>No inmate found.</p>;

    const editInmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('Invited Inmates')
        .update({
                name: props.name,
                years: parseInt(props.years),
                inmate: props.selectedInmate,
                weapon: props.weapon,
                bodyMass: props.bodyMass,
                weightlifting: parseFloat(props.weightlifting),
                lockColor: props.keyColor,
                experience: parseInt(props.experience),
                drink: props.drinker,
                vision: props.vision,
                height: parseFloat(props.height),
                helperType: props.helperType
            })
        .eq('id', id);

        window.location = "/squad"
    };

    return (
        <div>
            <div>
                <h2>Retrain {invitedInmate.name}</h2>

                <h3>Select the type of helper you are looking for: </h3>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    gap: '25px',
                    marginTop: '-40px',
                    marginBottom: '20px'
                }}>
                    <Link to="hitman">
                        <button onClick={() => props.setHelperType(HelperType.Hitman)}>Hitman</button>
                    </Link>

                    <Link to="locksmith">
                        <button onClick={() => props.setHelperType(HelperType.Locksmith)}>Locksmith</button>
                    </Link>

                    <Link to="watchman">
                        <button onClick={() => props.setHelperType(HelperType.Watchman)}>Watchman</button>
                    </Link>
                </div>

                <Outlet/>

                <CommonInmatePanel 
                    setName={props.setName}
                    setYears={props.setYears}
                    setSelectedInmate={props.setSelectedInmate}
                    allInmates={allInmates}
                />

                <button 
                    style={{marginTop: '-40px'}}
                    onClick={editInmate}
                >Finish</button>
            </div>
        </div>
    );
}

export default EditPage;
