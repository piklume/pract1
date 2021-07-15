import { createSelector } from 'reselect';

const selectPosts = state => state.posts;

export const selectPostCollection = createSelector(
    [selectPosts],
    posts => posts.postsCollection
);

export const isPostFetching = createSelector(
    [selectPosts],
    posts => posts.isFetching
);

export const selectPostsForUser = userId => (
    createSelector(
        [selectPostCollection],
        posts => posts.filter(post => post.userId === userId)
    )
);