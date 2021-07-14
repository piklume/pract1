import React from 'react';
import { connect } from 'react-redux';
import { selectUserCollection } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import UserCard from '../user-card/user-card.component';

import './user-list.styles.scss';

const UserList = ({ userCollection }) => {
    console.log(userCollection);
    return (
        <div className='user-list-container'>
            {
                userCollection.map(user => 
                    <UserCard key={user.id} user={user} />    
                )
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    userCollection: selectUserCollection
});

export default connect(mapStateToProps)(UserList);