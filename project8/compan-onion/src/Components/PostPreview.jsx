import React from "react";
import '../Styles/Font.css'
import '../Styles/HideIfNarrow.css'

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
            <div style={{
                width: '70%',
                left: 0
            }}>
                <TitleLabel />
                <CreationDateLabel />
            </div>

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
            textAlign: 'left'
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
        <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            height: 35
        }}>
            <img src="./img/onion/onion (3).png" style={{height: 35}}/>
            <span className="hide_if_narrow" style={{ fontSize: '16px', color: '#333' }}>11 Upvotes</span>
        </button>
    );
}

export default PostPreview;
