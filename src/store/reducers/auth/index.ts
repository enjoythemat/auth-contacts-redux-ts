import { AuthAction, AuthActionEnum, AuthState, User } from './types'

const initialState: AuthState = {
  user: {} as User,
  isAuth: false,
  isLoading: false,
  error: ''
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
        isLoading: false
      }
    case AuthActionEnum.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case AuthActionEnum.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
