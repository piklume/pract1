import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserCollection } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import UserCard from '../user-card/user-card.component';


import './user-list.styles.scss';

const UserList = (props) => {
    // console.log(userCollection);
    // console.log(props);
    const { userCollection,history } =  props;

    const handelClick = (event) => {
        const userId = event.currentTarget.id.slice(7);
        // history.push(`/userpage/:${userId}`);
        // console.log(event.currentTarget.id);
        history.push({
            pathname: '/userpage',
            state: { detail: userId }
        });
    }

    return (
        <div className='user-list-container'>
            {
                userCollection.map(user => 
                    <div key={user.id} className='user-card-div' > 
                        <UserCard key={user.id} user={user} handelClick={handelClick} />    
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    userCollection: selectUserCollection
});

export default withRouter(connect(mapStateToProps)(UserList));