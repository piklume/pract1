import UserActionTypes from './user.types';

const INITIAL_STATE = {
    userCollection: [],
    isFetching: false,
    errorMessage: null
};

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS_START:
            return {
                ...state,
                isFetching: true
            };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userCollection: action.payload
            }
        case UserActionTypes.FECTH_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
