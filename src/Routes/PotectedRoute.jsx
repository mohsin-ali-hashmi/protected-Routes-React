import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, roleType }) => {
  const auth = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if(roleType !==role) return <Navigate to='/' />
  return (
   <>
   
  { auth ?  children : <Navigate to='/' />}
   </>

  )
}

