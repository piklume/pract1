import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './user-page-page.styles.scss';
import UserPageContainer from '../user-page/user-page.container';
import { fetchPostsStart } from '../../redux/post/post.actions';

const UserPagePage = ({ fetchPostsStart, ...otherProps }) => {
    // console.log(props);
    useEffect(
        () => {
            fetchPostsStart();
        },[fetchPostsStart]
    )

    return (
         <UserPageContainer {...otherProps}/>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchPostsStart: () => dispatch(fetchPostsStart())
});

export default connect(null,mapDispatchToProps)(UserPagePage);