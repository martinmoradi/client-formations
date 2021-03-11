import { ActionType } from './authTypes';
import { UserType } from '../../types/models'
 
interface RegisterAction {
  type: ActionType.REGISTER_REQUEST
}

interface RegisterSuccess {
  type: ActionType.REGISTER_SUCCESS
  payload: UserType
}

interface RegisterFailure {
  type: ActionType.REGISTER_FAILURE
  payload: string
}

interface LoginAction {
  type: ActionType.LOGIN_REQUEST
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS
  payload: UserType
}


interface LoginFailure {
  type: ActionType.LOGIN_FAILURE
  payload: string
}

interface LogoutAction {
  type: ActionType.LOGOUT_ACTION
}

interface UserLoading {
  type: ActionType.USER_LOADING
}

interface UserLoaded {
  type: ActionType.USER_LOADED
  payload: UserType
}

interface AuthError {
  type: ActionType.AUTH_ERROR
  payload: string
}

export type Action = 
 | RegisterAction
 | RegisterSuccess
 | RegisterFailure
 | LoginAction
 | LoginSuccess
 | LoginFailure
 | LogoutAction
 | UserLoading
 | UserLoaded
 | AuthError