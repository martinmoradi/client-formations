// @ts-nocheck
/* eslint-disable max-len */

import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import { ActionType } from './authTypes';
import { Action } from './authActions';
import { UserRegister, UserLogin } from '../../types/models';

export const config = (method: string, body = null) => {
  const jwt = Cookies.get('jwt_token');
  if (jwt && !body) {
    return {
      method,
      headers: {
        Authorization: jwt,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }
  if (jwt && body) {
    return {
      method,
      headers: {
        Authorization: jwt,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }
  if (!jwt && body) {
    return {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

export const registerUser = (userData: UserRegister) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.REGISTER_REQUEST,
  });
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/login`,
      config('POST', userData)
    );
    const jwt = response.headers.get('Authorization');
    // @ts-ignore
    Cookies.set('jwt_token', jwt);
    const data = await response.json();
    dispatch({
      type: ActionType.REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.REGISTER_FAILURE,
      payload: error.message,
    });
  }
};

export const loginUser = (userData: UserLogin) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.LOGIN_REQUEST,
  });
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/login`,
      config('POST', userData)
    );
    const jwt = response.headers.get('Authorization');
    // @ts-ignore
    Cookies.set('jwt_token', jwt);
    const { data } = await response.json();
    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const logoutUser = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.LOGOUT_ACTION,
  });
  Cookies.remove('jwt_token');
};

export const loadUser = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.USER_LOADING });
  const jwt = Cookies.get('jwt_token');
  if (!jwt) return;
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, config('POST'));
    const { data } = await response.json();
    dispatch({
      type: ActionType.USER_LOADED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.AUTH_ERROR,
      payload: error.message,
    });
  }
};
