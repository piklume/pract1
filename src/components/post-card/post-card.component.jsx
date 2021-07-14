import React from 'react';

const PostCard = ({ post: {id, title, body}}) => {
    return (
        <div className='post-container'>
            <h4>{id}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )  
};

export default PostCard;