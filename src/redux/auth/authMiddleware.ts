/* eslint-disable max-len */

import { Dispatch } from "redux";
import Cookies from 'js-cookie';
import { ActionType } from './authTypes';
import { Action } from './authActions';
import { UserRegister, UserLogin } from '../../types/models';


export const registerUser =  (userData: UserRegister) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER_REQUEST
    });
    try {  
        const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };
      const { data, jwt } = await (await fetch(`${process.env.REACT_APP_BASE_URL}/signup`, config)).json()

      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        payload: data
      });
        Cookies.set('jwt_token', jwt)
    } catch (error) {
        dispatch({
          type: ActionType.REGISTER_FAILURE,
          payload: error.message,
        })
    }
  }

  export const loginUser =  (userData: UserLogin) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_REQUEST
    });
    try {  
        const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };
  
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, config)
       const jwt = response.headers.get('Authorization')
       // @ts-ignore
      Cookies.set('jwt_token', jwt)
      const data = await response.json()       
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data
      });
    
    } catch (error) {
        dispatch({
          type: ActionType.LOGIN_FAILURE,
          payload: error.message,
        })
    }
  }

  export const logoutUser = () => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT_ACTION
    })
    Cookies.remove('jwt_token')
  }