import { compose } from 'redux';
import { connect } from 'react-redux';
import { isPostFetching } from '../../redux/post/post.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';
import PostList from './post-list.component';
import { createStructuredSelector } from 'reselect';


const mapStateToProps = createStructuredSelector({
    isLoading: isPostFetching
});

const PostListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(PostList);

export default PostListContainer;