import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectUserCollection = createSelector(
    [selectUsers],
    users => users.userCollection
);

export const selectUser = userId => {
    return createSelector(
        [selectUserCollection],
        userCollections => {
            // userCollections.filter(user => user.id===userId)
            // console.log(1,userId);
            // console.log(2,userCollections);
            // console.log(userCollections.filter(user => user.id===userId));
            return userCollections.filter(user => user.id===userId)[0];
        }
    )
};

