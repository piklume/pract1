import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserCollection } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import UserCard from '../user-card/user-card.component';

import { fetchUsersStart } from '../../redux/user/user.actions';

import './user-list.styles.scss';

const UserList = (props) => {
    // console.log(userCollection);
    // console.log(props);
    const { userCollection,fetchUsersStart,history } =  props;

    useEffect(
        () => {
            fetchUsersStart();
        }
        ,[fetchUsersStart]
    );

    const handelClick = (event) => {
        const userId = event.target.id.slice(7);
        // history.push(`/userpage/:${userId}`);
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

const mapDispatchToProps = dispatch => ({
    fetchUsersStart: () => dispatch(fetchUsersStart())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserList));