export interface User {
  username: string
  password: string
}

export interface AuthState {
  user: User,
  isAuth: boolean
  isLoading: boolean
  error: string
}

export enum AuthActionEnum {
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER
  payload: User
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH
  payload: boolean
}

export interface SetLoadingAction {
  type: AuthActionEnum.SET_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR
  payload: string
}

export type AuthAction = SetUserAction | SetAuthAction | SetLoadingAction | SetErrorAction
