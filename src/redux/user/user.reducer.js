import UserActionTypes from './user.types';

const INITIAL_STATE = {
    userCollection: [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net"
        },
    ],
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
                users: action.payload
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
