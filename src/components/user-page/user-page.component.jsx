import React from 'react';
import { connect } from 'react-redux';

import UserCard from '../user-card/user-card.component';

import { selectUser } from '../../redux/user/user.selectors';

import './user-page.styles.scss';

const UserPage = ({ user }) => {
    // console.log(user)

    return (
        <div className='user-page-container'>
            <UserCard user={user} />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.location.state.detail;
    return ({
        user: selectUser(Number(userId))(state)
    });
}

export default connect(mapStateToProps)(UserPage);