import React from "react";

function PostsPage(props)
{
    return (
        <div style={{...props.style}}>
            <img src="./img/minecraft-thumbnail.png" 
                style={{width: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        position: 'absolute',
                        left: 0,
                        top: 2
                }}
            />
        </div>
    )
}

export default PostsPage;
