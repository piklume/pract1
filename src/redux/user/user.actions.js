import UserActionTypes from './user.types';

export const fetchUsersStart = () => ({
    type: UserActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = (userCollection) => ({
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: userCollection
});

export const fetchUsersFailure = (errorMessage) => ({
    type: UserActionTypes.FECTH_USERS_FAILURE,
    payload: errorMessage
});