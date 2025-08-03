import React from "react";
import { useState } from "react";
import OnionButton from "../Components/OnionButton";
import { supabase } from "../database/client.js";

function CreatePostPage()
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

            <CreateButton 
                style={{ width: 140 }}
                title={title}
                description={description}
                image_url={imageUrl}
            />
        </div>
    );
}

function CreateButton(props)
{
    const createPost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .insert({
                title: props.title,
                description: props.description,
                image_url: props.image_url
            })
            .select();
        window.location = "/"
    };

    return (
        <OnionButton 
            style={props.style}
            borderColor={'#ccc'}
            backgroundColor={'#fff'}
            height={35}
            onionId={2}
            textColor={'#333'}
            text={'Create'}
            onClick={createPost}
        />
    );
}

export default CreatePostPage;
