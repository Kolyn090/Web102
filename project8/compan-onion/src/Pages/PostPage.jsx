import React, { useState } from 'react';

function PostPage() {
    const [comments, setComments] = useState([
        "Looks great!",
        "Very helpful post.",
        "Thanks for sharing."
    ]);
    const [newComment, setNewComment] = useState('');
    const [imageFailed, setImageFailed] = useState(false);

    const post = {
        title: 'Example Post Title',
        description: 'Some description here.',
        imageUrl: 'https://via.placeholder.com/300x200', // try replacing with invalid URL to test fallback
        createdAt: 'August 2, 2025',
        upvotes: 42
    };

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
                fontFamily: 'sans-serif',
                width: '90%',
            }}>
                {/* Creation Time */}
                <div style={{ fontSize: '0.8rem', color: 'gray' }}>
                    Created: {post.createdAt}
                </div>

                {/* Title */}
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {post.title}
                </div>

                {/* Description */}
                <div style={{ fontSize: '1rem', lineHeight: '1.4', color: '#444' }}>
                    {post.description}
                </div>

                {/* Image (conditionally rendered if URL seems valid) */}
                {post.imageUrl && !imageFailed ? (
                    <img
                        src={post.imageUrl}
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

                {/* Upvotes and Edit Button */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ fontSize: '1rem', color: '#333' }}>
                        ↑ {post.upvotes} upvotes
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

                {/* Comments Section */}
                <div style={{ marginTop: '12px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Comments</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        marginBottom: '12px'
                    }}>
                        {comments.map((c, i) => (
                            <div key={i} style={{
                                backgroundColor: '#f4f4f4',
                                padding: '8px 10px',
                                borderRadius: '6px'
                            }}>
                                {c}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            style={{
                                flexGrow: 1,
                                padding: '8px',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '6px'
                            }}
                        />
                        <button
                            onClick={handleAddComment}
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
            </div>
        </div>
    );
}

export default PostPage;
