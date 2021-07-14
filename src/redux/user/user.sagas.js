import { takeLatest, put, call, all } from 'redux-saga/effects';

import { fetchUsersSuccess,fetchUsersFailure } from './user.actions';

import UserActionTypes from './user.types';


export function* fetchUsersAsync() {
    try {
        const userData = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // yield console.log(userData)

        yield put(fetchUsersSuccess(
        userData.map(item => ({id: item.id, name: item.name, username: item.username, email: item.email}))
        ))   
        } catch(error) {
            yield put(fetchUsersFailure(error.message));
        }
}

export function* fetchUsersStart() {
    yield takeLatest(
        UserActionTypes.FETCH_USERS_START,
        fetchUsersAsync
    );
}

export function* userSagas() {
    yield all([
        call(fetchUsersStart)
    ]);
}

