import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserListContainer from '../user-list/user-list.container';
import { fetchUsersStart } from '../../redux/user/user.actions';

import './user-list-page.styles.scss';

const UserListPage = ({ fetchUsersStart }) => {

    useEffect(
        () => {
            // console.log('Firing useEffect in user-list-page')
            fetchUsersStart();
        }
        ,[fetchUsersStart]
    );

    return (
        <UserListContainer />
    );
}

const mapDispatchToProps = dispatch => ({
    fetchUsersStart: () => dispatch(fetchUsersStart())
});

export default connect(null,mapDispatchToProps)(UserListPage)