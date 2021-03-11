import Cookies from 'js-cookie';
import { Action } from './authActions';
import { ActionType } from './authTypes';
import { AuthState } from '../../types/models';

const initialState = {
  isFetching: false,
  isAuthenticated: !!Cookies.get('jwt_token'),
  errorMessage: null,
  user: null,
};

const authReducer = 
(state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case ActionType.USER_LOADING:
    case ActionType.REGISTER_REQUEST:
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: null,
      };

    case ActionType.USER_LOADED:
    case ActionType.REGISTER_SUCCESS:
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: null,
        user: action.payload,
      };

    case ActionType.AUTH_ERROR:
    case ActionType.REGISTER_FAILURE:
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
        user: null,
      };

    case ActionType.LOGOUT_ACTION:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
