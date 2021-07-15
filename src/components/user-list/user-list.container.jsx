import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import UserList from './user-list.component'
import WithSpinner from '../with-spinner/with-spinner.component';
import { isUserFetching } from '../../redux/user/user.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isUserFetching
});

const UserListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(UserList);

export default UserListContainer;