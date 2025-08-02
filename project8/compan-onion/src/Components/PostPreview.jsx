import React from "react";
import '../Styles/Font.css'
import '../Styles/HideIfNarrow.css'
import { Link } from 'react-router-dom';
import OnionButton from "./OnionButton";

function PostPreview()
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
                <TitleLabel />
                <CreationDateLabel />
            </Link>

            <div style={{
                display: 'flex',
                width: '30%',
                right: 0,
                position: 'relative',
                justifyContent: 'center'
            }}>
                <UpvoteButton />
            </div>
        </div>
    );
}

function TitleLabel()
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
            This is a very long title that should be truncated with ellipsis if it exceeds the container
        </div>
    );
}

function CreationDateLabel()
{
    return (
        <div style={{
            position: 'relative',
            textAlign: 'left',
            marginTop: 5,
            fontSize: '0.8rem',
            color: 'gray'
        }}>
            Created: Aug 2, 2025
        </div>
    );
}

function UpvoteButton()
{
    return (
        <OnionButton 
            to={"create"}
            borderColor={'#ccc'}
            backgroundColor={'#fff'}
            height={35}
            onionId={3}
            textColor={'#333'}
            text={'11 Upvotes'}
        />
    );
}

export default PostPreview;
