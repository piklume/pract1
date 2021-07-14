import React from 'react';

import './user-card.styles.scss';

const UserCard = ({ user }) => {
    const { name, username, email } = user;
    return (
        <div className='user-container'>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
        </div>
    )
};

export default UserCard;