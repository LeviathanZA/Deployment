// src/actions/userActions.js

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData
  };
};

export const loginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
