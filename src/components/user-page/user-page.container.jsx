import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import UserPage from '../user-page/user-page.component';

import { isPostFetching } from '../../redux/post/post.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isPostFetching
});

const UserPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(UserPage);

export default UserPageContainer;