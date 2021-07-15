import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPostCollection } from '../../redux/post/post.selectors';
import './post-list.styles.scss';

import PostCard from '../post-card/post-card.component';


const PostList = ({ postsCollection }) => {
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


export default connect(mapStateToProps)(PostList);