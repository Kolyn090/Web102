import React from "react";
import { Link } from 'react-router-dom';

function InmateCard(props)
{
    return (
        <Link
            to={`/inmate/${props.id}`} 
            state={{
                invitedInmate: props.invitedInmate
            }}
            style={{
            width: 250,
            border: '1px solid #ccc',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
            <img
                src={props.imageUrl}
                alt="Badge"
                style={{
                    width: '64px',
                    height: '64px',
                    imageRendering: 'pixelated',
                }}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                padding: '12px',
                fontSize: 20
            }}>
            {props.fields.map((field, index) => (
                <div key={index}>
                    <strong>{field.label}:</strong> {field.value ? field.value : "-"}
                </div>
                ))}
            </div>
        </Link>
    );
}

export default InmateCard;
