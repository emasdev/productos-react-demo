import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isValid, redirectPath = "/" }) => {
  if (!isValid) {
    return <Navigate to={redirectPath} replace />
  }
  return (
    <Outlet />
  )
}

export default ProtectedRoute
