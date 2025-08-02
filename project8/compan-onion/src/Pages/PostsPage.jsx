import React from "react";
import SubRedditProfile from "../Components/SubredditProfile";

function PostsPage(props)
{
    return (
        <div style={{...props.style}}>
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
                <SubRedditProfile
                    style={{width: '100%',
                            objectFit: 'contain',
                            display: 'block',
                            position: 'relative',
                            left: '5%',
                            marginTop: '-5%'
                    }}
                />
            </div>
        </div>
    )
}

export default PostsPage;
