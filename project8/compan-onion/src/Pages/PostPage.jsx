import React, { useEffect, useState } from 'react';
import '../Styles/Font.css'
import OnionButton from '../Components/OnionButton';
import { supabase } from "../database/client.js";
import { useParams, useLocation } from 'react-router-dom';
import { cleanCreationTime } from "../data/creationDateCleaner.js";

function PostPage(props) {
    const { id } = useParams();
    const [comments, setComments] = useState([
        "Looks great!",
        "Very helpful post.",
        "Thanks for sharing."
    ]);
    const [newComment, setNewComment] = useState('');
    const [imageFailed, setImageFailed] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetchPostById(id, setPost);
    }, []);

    if (!post) return <div>Loading...</div>;

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment('');
        }
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '20px',
                fontFamily: 'Inter',
                width: '90%'
            }}>
                <CreationDateLabel post={post} />
                <TitleLabel post={post} />
                <DescriptionLabel post={post} />
                <PostImage post={post} imageFailed={imageFailed} />
                <PostOptionsPanel post={post} />
                <CommentsPanel newComment={newComment} 
                                comments={comments} 
                                handleAddComment={handleAddComment}
                                setNewComment={setNewComment}/>
            </div>
        </div>
    );
}

const fetchPostById = async (id, setPost) => {
    const { data, error } = await supabase
        .from("Posts")
        .select()
        .eq('id', id)
        .single();
        
        if (error) {
            console.error('Error fetching post:', error);
            return;
        }

    setPost(data);
};

function CreationDateLabel(props)
{
    return (
        <div style={{ fontSize: '0.8rem', color: 'gray', textAlign: 'start' }}>
            Created: {cleanCreationTime(props.post.created_at)}
        </div>
    );
}

function TitleLabel(props)
{
    return (
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'start' }}>
            {props.post.title}
        </div>
    );
}

function DescriptionLabel(props)
{
    return (
        <div style={{ fontSize: '1rem', lineHeight: '1.4', color: '#444', textAlign: 'start' }}>
            {props.post.description}
        </div>
    );
}

function PostImage(props)
{
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start'
        }}>
            {/* Image (conditionally rendered if URL seems valid) */}
            {props.post.imageUrl && !props.imageFailed ? (
                <img
                    src={props.post.imageUrl}
                    alt="Post"
                    style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }}
                    onError={() => setImageFailed(true)}
                />
            ) : (
                <p style={{ color: '#888', fontStyle: 'italic' }}>
                    No image provided.
                </p>
            )}
        </div>
    );
}

function PostOptionsPanel(props)
{
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <OnionButton
                borderColor={'#ccc'}
                backgroundColor={'#f2f2f2'}
                height={35}
                onionId={3}
                textColor={'#333'}
                text={props.post.upvotes}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <OnionButton
                        borderColor={'#ccc'}
                        backgroundColor={'#f2f2f2'}
                        height={35}
                        onionId={5}
                        textColor={'#333'}
                        text={'Edit'}
                    />

                    <OnionButton 
                        borderColor={'#e74c3c'}
                        backgroundColor={'#fff0f0'}
                        height={35}
                        onionId={4}
                        textColor={'#e74c3c'}
                        text={'Delete'}
                    />
                </div>
            </div>
        </div>
    );
}

function CommentsPanel(props)
{
    return (
        <div style={{ 
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'start' }}>Comments</div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginBottom: '12px'
            }}>
                {props.comments.map((c, i) => (
                    <div key={i} style={{
                        backgroundColor: '#f4f4f4',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        textAlign: 'start'
                    }}>
                        {c}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={props.newComment}
                    onChange={(e) => props.setNewComment(e.target.value)}
                    style={{
                        flexGrow: 1,
                        padding: '8px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '6px'
                    }}
                />

                <OnionButton 
                    borderColor={'#007bff'}
                    backgroundColor={'#fff'}
                    height={35}
                    onionId={2}
                    textColor={'#007bff'}
                    text={'Post'}
                />
            </div>
        </div>
    );
}

export default PostPage;
