import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import camelToTitle from "../util/CamelToTitle";
import { supabase } from "../database/client.js";

function DetailPage(props)
{
    const { id } = useParams();
    const location = useLocation();
    const inmate = location.state?.invitedInmate;
    const inmateImagePath = '/assets/escapists/';

    const fireInmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Invited Inmates')
            .delete()
            .eq('id', id); 

        window.location = "/squad";
    };

    const fields=[
                { label: 'Name', value: inmate.name },
                { label: 'Helper', value: camelToTitle(inmate.helperType) },
                { label: 'Time Recruited', value: new Date(inmate.created_at).toISOString().split('T')[0]},
                { label: 'Years in Prison', value: inmate.years },
                { label: 'Inmate', value: inmate.inmate },
                { label: 'Weapon', value: inmate.weapon },
                { label: 'Body Mass', value: inmate.bodyMass },
                { label: 'Weightlifting', value: inmate.weightlifting },
                { label: 'Lock Color', value: inmate.lockColor },
                { label: 'Experience', value: inmate.experience },
                { label: 'Drink', value: inmate.drink },
                { label: 'Vision', value: inmate.vision },
                { label: 'Height', value: inmate.height },
    ];

    return (
        <div>
            <h2>Helper Detail</h2>
            {
                inmate ? 
                (
                    <div>
                        <h3 style={{marginTop: -40}}>Inmate # {id}</h3>
                        <img
                            src={inmateImagePath + inmate.inmate + '.png'}
                            alt="Badge"
                            style={{
                                marginTop: '-60px',
                                width: '128px',
                                height: '128px',
                                imageRendering: 'pixelated',
                            }}
                        />
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '8px',
                            padding: '12px',
                            fontSize: 32
                        }}>
                        {
                            fields.map((field, index) => (
                            <div key={index}>
                                <strong>{field.label}:</strong> {field.value ? field.value : "-"}
                            </div>
                            ))
                        }
                        </div>
                        
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '25px'}}>
                                <Link to={`/edit/${id}`} state={{
                                    invitedInmate: inmate
                                }} >
                                    <button style={{ width: 210 }}>Retrain him</button>
                                </Link>
                                <button style={{ width: 210 }} onClick={fireInmate}>Fire him</button>
                        </div>
                    </div>
                ) : 
                (
                    <p>No detail data passed via state. You might want to fetch it using the ID.</p>
                )
            }
        </div>
    );
}

export default DetailPage;
