import {
    API_CALL_SUCCESS,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SIGNOUT_USER_SUCCESS,
    LOAD_TEACHERS_SUCCESS,
    LOAD_TEACHERS_FAIL
} from './actionTypes';

export const apiCallStart = () => ({
    type: API_CALL_SUCCESS
});

export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user,
});

export const registerUserFail = (error) => ({
    type: REGISTER_USER_FAIL,
    payload: error,
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});

export const loginUserFail = (user) => ({
     type: LOGIN_USER_FAIL,
     payload: user,
});

export const signoutUserSuccess = () => ({
    type: SIGNOUT_USER_SUCCESS,
});

export const loadTeachersSuccess = (teachers) => ({
    type: LOAD_TEACHERS_SUCCESS,
    payload: teachers,
})

export const loadTeachersFail = (error) => ({
    type: LOAD_TEACHERS_FAIL,
    payload: error,
})
