import { AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction, User } from './types'
import { AppDispatch } from '../../index'
import axios from 'axios'

export const AuthActionCreators = {
  setUser: (user: User): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user
  }),
  setAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth
  }),
  setLoading: (loading: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload: loading
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error
  }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setError(''))
      dispatch(AuthActionCreators.setLoading(true))
      setTimeout(async () => {
        const users = await axios.get<User[]>('./users.json')
        const user = users.data.find(el => el.username === username && el.password === password)
        if (user) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', username)
          dispatch(AuthActionCreators.setUser(user))
          dispatch(AuthActionCreators.setAuth(true))
        } else {
          dispatch(AuthActionCreators.setError('Неверный логин или пароль'))
        }
        dispatch(AuthActionCreators.setLoading(false))
      }, 1500)
    } catch (e) {
      console.log(e)
      dispatch(AuthActionCreators.setError('Ошибка сервера, попробуйте позже'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as User))
    dispatch(AuthActionCreators.setAuth(false))
  }
}
