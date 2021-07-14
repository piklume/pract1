import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPostCollection } from '../../redux/post/post.selectors';
import './post-list.styles.scss';

import PostCard from '../post-card/post-card.component';
import { fetchPostsStart } from '../../redux/post/post.actions';


const PostList = ({ postsCollection,fetchPostsStart }) => {
    useEffect(
        () => {
            fetchPostsStart();
        },[fetchPostsStart]
    )

    return (
        <div className='post-list-container'>
            {
                postsCollection.map(post => <PostCard key={post.id} post={post} />)
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    postsCollection: selectPostCollection
});

const mapDispatchToProps = dispatch => ({
    fetchPostsStart: () => dispatch(fetchPostsStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(PostList);