import React from 'react';
import { connect } from 'react-redux';

import UserCard from '../user-card/user-card.component';
import PostCard from '../post-card/post-card.component';

import { selectUser } from '../../redux/user/user.selectors';
import { selectPostsForUser } from '../../redux/post/post.selectors';

import './user-page.styles.scss';

const UserPage = ({ user,posts }) => {
   
    return (
        <div className='user-page-container'>
            <UserCard user={user} />
            <div className='user-page-post-list-container'>
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
            </div>
        </div>
        
    );
}

const mapStateToProps = (state,ownProps) => {
    const userId = ownProps.location.state.detail;
    return ({
        user: selectUser(Number(userId))(state),
        posts: selectPostsForUser(Number(userId))(state)
    });
}

export default connect(mapStateToProps)(UserPage);