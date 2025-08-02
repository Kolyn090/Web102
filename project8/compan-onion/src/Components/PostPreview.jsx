import React from "react";
import '../Styles/Font.css'
import '../Styles/HideIfNarrow.css'
import { Link } from 'react-router-dom';
import OnionButton from "./OnionButton";
import cleanCreationDate from "../data/creationDateCleaner.js";

function PostPreview(props)
{
    return (
        <div style={{
            borderRadius: 20,
            height: '60px',
            width: '90%',
            border: '1px solid black',
            padding: '12px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 25
        }}>
            <Link to="post"
                style={{
                width: '70%',
                left: 0
            }}>
                <TitleLabel title={props.title}/>
                <CreationDateLabel created_at={props.created_at}/>
            </Link>

            <div style={{
                display: 'flex',
                width: '30%',
                right: 0,
                position: 'relative',
                justifyContent: 'center'
            }}>
                <UpvoteButton upvotes={props.upvotes}/>
            </div>
        </div>
    );
}

function TitleLabel(props)
{
    return (
        <div style={{
            fontFamily: 'Inter-Bold',
            fontSize: '1.2rem',
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textAlign: 'left',
            color: 'black'
        }}>
            {props.title}
        </div>
    );
}

function CreationDateLabel(props)
{
    return (
        <div style={{
            position: 'relative',
            textAlign: 'left',
            marginTop: 5,
            fontSize: '0.8rem',
            color: 'gray'
        }}>
            Created: {cleanCreationDate(props.created_at)}
        </div>
    );
}

function UpvoteButton(props)
{
    return (
        <OnionButton 
            to={"create"}
            borderColor={'#ccc'}
            backgroundColor={'#fff'}
            height={35}
            onionId={3}
            textColor={'#333'}
            text={`${props.upvotes} Upvotes`}
        />
    );
}

export default PostPreview;
