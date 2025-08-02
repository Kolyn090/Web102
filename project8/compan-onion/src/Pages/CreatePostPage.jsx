import React from "react";
import { useState } from "react";

function CreatePostPage()
{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleCreate = () => {
        const postData = {
            title,
            description,
            imageUrl,
            createdAt: new Date().toISOString()
        };
        console.log('Creating post:', postData);
        // You can replace this with an API call or handler
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <h2>Create a New Post</h2>

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

            <CreateButton style={{ width: 140 }}/>
        </div>
    );
}

function CreateButton(props)
{
    return (
        <button style={{
            ...props.style,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            height: 35,
        }}>
            <img src="./img/onion/onion (2).png" style={{height: 35}}/>
            <span style={{ fontSize: '16px', color: '#333' }}>Create</span>
        </button>
    );
}

export default CreatePostPage;
