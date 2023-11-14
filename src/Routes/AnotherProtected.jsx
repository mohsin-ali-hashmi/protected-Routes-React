import React from 'react'
import { Navigate } from 'react-router-dom'

export const AnotherProtectedRoute = ({ Component }) => {
  const auth = localStorage.getItem('token')
  return (
   <>
   
  { auth ?  <Component/> : <Navigate to='/' />}
   </>

  )
}

