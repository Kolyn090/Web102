import React from "react";
import { useState } from "react";

function UpdatePostPage()
{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <h2>Update Post</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px'
                }}
            />

            <textarea
                placeholder="Description (Optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    resize: 'vertical',
                    maxHeight: '60vh',
                }}
            />

            <input
                type="text"
                placeholder="Image URL (Optional)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px'
                }}
            />

            <UpdateButton style={{ width: 140 }}/>
        </div>
    );
}

function UpdateButton(props)
{
    return (
        <OnionButton 
            style={props.style}
            borderColor={'#ccc'}
            backgroundColor={'#fff'}
            height={35}
            onionId={2}
            textColor={'#333'}
            text={'Update'}
        />
    );
}

export default UpdatePostPage;
