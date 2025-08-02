import React, { useEffect, useState } from 'react';
import '../Styles/Font.css'

function PostPage() {
    const [comments, setComments] = useState([
        "Looks great!",
        "Very helpful post.",
        "Thanks for sharing."
    ]);
    const [newComment, setNewComment] = useState('');
    const [imageFailed, setImageFailed] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        setPost(
            {
                title: 'Example Post Title',
                description: 'Some description here.',
                imageUrl: 'https://wallpapers.com/images/hd/best-minecraft-sunset-at-sea-xcmy8jpadxyrgys8.jpg',
                createdAt: 'August 2, 2025',
                upvotes: 42
            });
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

function CreationDateLabel(props)
{
    return (
        <div style={{ fontSize: '0.8rem', color: 'gray', textAlign: 'start' }}>
            Created: {props.post.createdAt}
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
            <div style={{ fontSize: '1rem', color: '#333' }}>
                ↑ {props.post.upvotes} upvotes
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{
                        padding: '6px 12px',
                        fontSize: '0.9rem',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        backgroundColor: '#f2f2f2',
                        cursor: 'pointer'
                    }}>
                        Edit
                    </button>
                    <button style={{
                        padding: '6px 12px',
                        fontSize: '0.9rem',
                        border: '1px solid #e74c3c',
                        borderRadius: '6px',
                        backgroundColor: '#fff0f0',
                        color: '#e74c3c',
                        cursor: 'pointer'
                    }}>
                        Delete
                    </button>
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
                <button
                    onClick={props.handleAddComment}
                    style={{
                        padding: '8px 12px',
                        fontSize: '1rem',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default PostPage;
