import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './post-list-page.styles.scss';

import PostListContainer from '../post-list/post-list.container';
import { fetchPostsStart } from '../../redux/post/post.actions';

const PostListPage = ({ fetchPostsStart }) => {

    useEffect(
        () => {
            fetchPostsStart();
        },[fetchPostsStart]
    )

    return (
        <PostListContainer />
    )
}

const mapDispatchToProps = dispatch => ({
    fetchPostsStart: () => dispatch(fetchPostsStart())
});

export default connect(null,mapDispatchToProps)(PostListPage);