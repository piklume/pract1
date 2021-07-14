import { createSelector } from 'reselect';

const selectPosts = state => state.posts;

export const selectPostCollection = createSelector(
    [selectPosts],
    posts => posts.postsCollection
);