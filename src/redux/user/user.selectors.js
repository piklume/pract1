import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectUserCollection = createSelector(
    [selectUsers],
    users => users.userCollection
);



