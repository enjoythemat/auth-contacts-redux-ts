import React, { FC, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import { useAction } from './hooks/useAction'
import { User } from './store/reducers/auth/types'

const App: FC = () => {
  const { setAuth, setUser } = useAction()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true)
      setUser({username: localStorage.getItem('username')} as User)
    }
  }, [])

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  )
}

export default App
