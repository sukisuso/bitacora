import axios from 'axios';

export const USER_ACTION = {
  LOGIN: 'USER_ACTION_LOGIN',
  CREDENTIALS_ERROR: 'USER_ERROR_LOGIN',
  SIGNUP: 'USER_ACTION_SIGNUP',
  SIGNUP_ERROR: 'USER_ERROR_SIGNUP',
};

const API = {
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  SIGNUP: '/api/signup',
};

const sendActionLogin = (item) => {
  return {
    type: USER_ACTION.LOGIN,
    item,
  };
};

const sendCredentialsError = () => {
  return {
    type: USER_ACTION.CREDENTIALS_ERROR,
  };
};

const sendActionSignup = () => {
  return {
    type: USER_ACTION.SIGNUP,
  };
};

const sendSignupError = () => {
  return {
    type: USER_ACTION.SIGNUP_ERROR,
  };
};

export function userLogin(username, password) {
  return function(dispatch) {
    axios.post(API.LOGIN, {
      username,
      password,
    })
    .then((response) => {
      dispatch(sendActionLogin(response));
    })
    .catch(() => {
      dispatch(sendCredentialsError());
    });
  };
}

export function userSignup(user) {
  return function(dispatch) {
    axios.post(API.SIGNUP, {
      user,
    })
    .then(() => {
      dispatch(sendActionSignup());
    })
    .catch(() => {
      dispatch(sendSignupError());
    });
  };
}
