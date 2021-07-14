import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchPostsSuccess,fetchPostsFailure } from './post.actions';

import PostActionTypes from './post.types';

export function* fetchPostsAsync() {
    try {
        const postsData = yield fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(response => response.json());

        // yield console.log(postsData);
        yield put(fetchPostsSuccess(postsData));
    } catch(error) {
        yield put(fetchPostsFailure(error.message))
    }
}

export function* fetchPostsStart() {
    yield takeLatest(
        PostActionTypes.FETCH_POSTS_START,
        fetchPostsAsync
    );
}

export function* postSagas() {
    yield all([
        call(fetchPostsStart)
    ]);
}