import React, { useEffect, useState } from "react";
import { supabase } from "../database/client";
import { Link } from "react-router-dom";
import InmateCard from "../components/InmateCard"
import camelToTitle from "../util/CamelToTitle";

function SquadPage(props)
{
    const [invitedInmates, setInvitedInmates] = useState([]);
    const inmateImagePath = '/assets/escapists/';

    const fetchInmates = async () => {
        const { data, error } = await supabase
            .from("Invited Inmates") // change to match your table name
            .select()
            .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching inmates:', error);
                return;
            }

        setInvitedInmates(data);
    };

    useEffect(() => {
        fetchInmates();
    }, []);

    return (
        <div>
            {!invitedInmates || invitedInmates.length == 0 ? 
                (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', // horizontal center
                        alignItems: 'center',     // vertical center
                        height: '100vh'           // full viewport height
                    }}>
                        <div>
                            <p>No inmate available... You need helpers TONIGHT!</p>
                            <Link to={"/create"}>
                                <button>Invite an Inmate NOW!!!</button>
                            </Link>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <h2>Squad</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '16px',
                            padding: '16px'
                        }}>
                            {invitedInmates.map((inmate, i) => (
                                <InmateCard 
                                    id={inmate.id}
                                    key={i} 
                                    invitedInmate={inmate}
                                    imageUrl={inmateImagePath + inmate.inmate + '.png'} 
                                    fields={[
                                        { label: 'Name', value: inmate.name },
                                        { label: 'Helper', value: camelToTitle(inmate.helperType) },
                                        { label: 'Date Recruited', value: new Date(inmate.created_at).toISOString().split('T')[0]},
                                        { label: 'Years in Prison', value: inmate.years },
                                        // { label: 'Inmate', value: inmate.inmate },
                                        // { label: 'Weapon', value: inmate.weapon },
                                        // { label: 'Body Mass', value: inmate.bodyMass },
                                        // { label: 'Weightlifting', value: inmate.weightlifting },
                                        // { label: 'Lock Color', value: inmate.lockColor },
                                        // { label: 'Experience', value: inmate.experience },
                                        // { label: 'Drink', value: inmate.drink },
                                        // { label: 'Vision', value: inmate.vision },
                                        // { label: 'Height', value: inmate.height },
                                    ]}
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SquadPage;
