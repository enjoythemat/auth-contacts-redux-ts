import React from 'react'
import Login from '../pages/Login'
import Contacts from '../pages/Contacts'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/typedSelector'

const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    isAuth
      ? <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      : <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
  )
}

export default AppRouter
