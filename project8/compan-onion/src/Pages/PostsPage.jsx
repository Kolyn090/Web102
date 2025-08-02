import React from "react";
import SubOnionProfile from "../Components/SubOnionProfile";
import PostPreview from "../Components/PostPreview";
import OnionButton from "../Components/OnionButton";

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
                />

                <OnionButton 
                    borderColor={'#F97A00'}
                    backgroundColor={'#fff'}
                    height={35}
                    onionId={5}
                    textColor={'#F97A00'}
                    text={'Popularity'}
                />
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
