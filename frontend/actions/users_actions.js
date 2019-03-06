import * as ApiUtil from '../util/users_api_util';

// Action creators
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveUsers = users => ({
        type: RECEIVE_ALL_USERS,
        users,
});
export const receiveUsersErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors,
});

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS,
});

// Thunk action creators
export const fetchUsers = () => dispatch => (
    ApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)),
            err => (dispatch(receiveUsersErrors(err.responseJSON)))
        )   
);