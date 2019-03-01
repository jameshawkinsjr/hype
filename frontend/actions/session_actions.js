import * as ApiUtil from '../util/session_api_util';

// Action creators
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LANDING_PAGE_SIGNUP = 'LANDING_PAGE_SIGNUP';

export const receiveCurrentUser = currentUser => ({
        type: RECEIVE_CURRENT_USER,
        currentUser,
});

export const logoutCurrentUser = () => ({
        type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
        type: RECEIVE_SESSION_ERRORS,
        errors,
});

export const clearSessionErrors = () => ({
        type: CLEAR_SESSION_ERRORS,
});

export const landingPageSignup = email => ({
        type: LANDING_PAGE_SIGNUP,
        email,
})

// Thunk action creators
export const login = (user) => dispatch => (
    ApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveSessionErrors(err.responseJSON)))
        )   
);

export const signup = (user) => dispatch => (
    ApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveSessionErrors(err.responseJSON)))
        )   
);

export const logout = () => dispatch => (
    ApiUtil.logout()
        .then( () => dispatch(logoutCurrentUser()),
            err => (dispatch(receiveSessionErrors(err.responseJSON)))
        )   
);