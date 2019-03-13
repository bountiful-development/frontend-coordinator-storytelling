import Axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const USER_REGISTERED = 'USER_REGISTERED';
export const LOGIN_USER = 'LOGIN_USER';
export const USER_LOGIN = 'USER_LOGIN';

export const registerUser = (newUser) => dispatch => {
    console.log("Registering");
    dispatch({ type: REGISTER_USER });
    Axios
        .post('https://coordinator-storytelling-api.herokuapp.com/api/register', newUser)
        .then(res => {
            dispatch({ type: USER_REGISTERED, payload: res.data })
        })
        .catch(err => console.log(err));
}

export const loginUser = (user) => dispatch => {
    dispatch({ type: LOGIN_USER });
    Axios
        .post('https://coordinator-storytelling-api.herokuapp.com/api/register', user)
        .then(res => {
            dispatch({ type: USER_LOGIN, payload: res.data })
        })
        .catch(err => console.log(err));
}