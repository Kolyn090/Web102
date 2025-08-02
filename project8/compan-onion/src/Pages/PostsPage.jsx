import React from "react";
import SubOnionProfile from "../Components/SubOnionProfile";
import PostPreview from "../Components/PostPreview";

function PostsPage(props)
{
    return (
        <div style={{...props.style}}>
            <div>
                <ThumbnailPanel />
                <SortByPanel />
                <PreviewPostsPanel />
            </div>
        </div>
    )
}

function ThumbnailPanel()
{
    return (
        <div>
            <img src="./img/minecraft-thumbnail.png" 
                style={{width: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'relative',
                        left: 0,
                        top: 4
                }}
            />
            <SubOnionProfile
                style={{width: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'relative',
                        left: '5%',
                        marginTop: '-5%'
                }}
            />
        </div>
    );
}

function SortByPanel()
{
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                justifyContent: 'flex-end'
            }}>
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
                    <img src="./img/onion/onion (4).png" style={{height: 35}}/>
                    <span className="hide_if_narrow" style={{ fontSize: '16px', color: '#333' }}>Newest</span>
                </button>
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
                    <img src="./img/onion/onion (5).png" style={{height: 35}}/>
                    <span className="hide_if_narrow" style={{ fontSize: '16px', color: '#333' }}>Popularity</span>
                </button>
            </div>
        </div>
    );
}

function PreviewPostsPanel()
{
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '20px',
            paddingBottom: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        }}>
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </div>
    );
}

export default PostsPage;
