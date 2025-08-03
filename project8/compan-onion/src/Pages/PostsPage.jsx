import React, { useState, useEffect } from "react";
import SubOnionProfile from "../Components/SubOnionProfile";
import PostPreview from "../Components/PostPreview";
import OnionButton from "../Components/OnionButton";
import { supabase } from "../database/client.js";

function PostsPage(props)
{
    const [posts, setPosts] = useState([]);
    const [renderPosts, setRenderPosts] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleUpvote = async (post, setPost) => {
        const newCount = post.upvotes + 1;
        const result = await updateUpvotes(post.id, newCount);
        if (!result.error) {
            setPost(result.data[0]); // or re-fetch post if needed
        }
    };

    useEffect(() => {
        fetchPosts(setPosts, setRenderPosts);
    }, []);

    return (
        <div style={{...props.style}}>
            <div>
                <ThumbnailPanel />
                <SortByPanel posts={posts} setPosts={setRenderPosts}/>
                <SearchField value={searchText} 
                                placeholder={"Search"} 
                                onChange={(v) => {
                                    setRenderPosts(searchPosts(posts, v));
                                    setSearchText(v);
                                }}/>
                <PreviewPostsPanel posts={renderPosts} handleUpvote={handleUpvote}/>
            </div>
        </div>
    )
}

function searchPosts(posts, query) {
    const lowerQuery = query.toLowerCase();

    return posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery)
    );
}

const fetchPosts = async (setPosts, setRenderPosts) => {
    const { data, error } = await supabase
        .from("Posts")
        .select();
        
        if (error) {
            console.error('Error fetching posts:', error);
            return;
        }

    setPosts(data);
    setRenderPosts(data);
};

const sortPostByNewest = (posts, setPosts) => {
    const sorted = [...posts].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
    );
    setPosts(sorted);
};

const sortPostByPopularity = (posts, setPosts) => {
    const sorted = [...posts].sort((a, b) => b.upvotes - a.upvotes);
    setPosts(sorted);
};

const updateUpvotes = async (postId, newUpvoteCount) => {
    const { data, error } = await supabase
        .from('Posts')
        .update({ upvotes: newUpvoteCount })
        .eq('id', postId)
        .select();

    if (error) {
        console.error('Failed to update upvotes:', error.message);
        return { error };
    }

    return { data };
}

function SearchField(props)
{
    return (
        <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            style={{
                padding: '8px',
                fontSize: '16px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                width: '100%',
                maxWidth: '300px',
                marginBottom: '16px',
                margin: '8px'
            }}
        />
    );
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

function SortByPanel(props)
{
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'row',
                gap: '5px',
                justifyContent: 'flex-end'
            }}>
                <OnionButton 
                    borderColor={'#FEA405'}
                    backgroundColor={'#fff'}
                    height={35}
                    onionId={4}
                    textColor={'#FEA405'}
                    text={'Newest'}
                    onClick={() => sortPostByNewest(props.posts, props.setPosts)}
                />

                <OnionButton 
                    borderColor={'#F97A00'}
                    backgroundColor={'#fff'}
                    height={35}
                    onionId={5}
                    textColor={'#F97A00'}
                    text={'Popularity'}
                    onClick={() => sortPostByPopularity(props.posts, props.setPosts)}
                />
            </div>
        </div>
    );
}

function PreviewPostsPanel(props)
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
            {
                props.posts.map(post => (
                    <PostPreview 
                        key={post.id}
                        id={post.id}
                        post={post}
                        title={post.title}
                        created_at={post.created_at}
                        upvotes={post.upvotes}
                        handleUpvote={props.handleUpvote}
                    />
                ))
            }
        </div>
    );
}

export default PostsPage;
