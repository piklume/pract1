import React from 'react';

import './user-card.styles.scss';

const UserCard = ({ user,handelClick }) => {
    if (user !== undefined) {
        const { id, name, username, email } = user;
        // console.log('usercard',user);
        return (
            <div className='user-container' id={`userid-${id}`} onClick={handelClick}>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <h4>{email}</h4>
            </div>
        )
    } else {
        return (
            <div className='user-container-undefined'>
                <h4>User is undefined, re-route from user list again lol</h4>
            </div>
        );
    }
    
};

export default UserCard;