import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../database/client.js";
import { useParams, useLocation } from 'react-router-dom';
import OnionButton from "../Components/OnionButton.jsx";

function UpdatePostPage()
{
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [post, setPost] = useState(null);

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from ('Posts')
        .update({
            title: title,
            description: description,
            image_url: imageUrl
        })
        .eq('id', id);
        window.location = `/post/${id}`
    };

    useEffect(() => {
        if (id) {
            fetchPost(setLoading, id, setPost);
        }
    }, [id]);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setDescription(post.description);
            setImageUrl(post.image_url);
        }
    }, [post]);
    
    if (loading) return <p>Loading...</p>;

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
                value={imageUrl ? imageUrl : ""}
                onChange={(e) => setImageUrl(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px'
                }}
            />

            <UpdateButton style={{ width: 140 }} onClick={updatePost}/>
        </div>
    );
}

const fetchPost = async (setLoading, id, setPost) => {
    setLoading(true);
    const { data, error } = await supabase
        .from('Posts') 
        .select('*')
        .eq('id', id) 
        .single();
    
    if (error) setError(error);
        else setPost(data);

    setLoading(false);
};

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
            onClick={props.onClick}
        />
    );
}

export default UpdatePostPage;
