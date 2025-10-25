import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const isAuthenticated = false
    const loading = true

    if (loading) {
        // introduce a spinner here
        <div>Loading ...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to={"/"} replace />
    }

  return (
    <DashboardLayout>
        {children ? children : <Outlet />}
    </DashboardLayout>
  )
}

export default ProtectedRoute