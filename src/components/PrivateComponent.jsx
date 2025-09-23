import React from 'react'
import LoaderComponent from './LoaderComponent'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStatus from '../hook/useAuthStatus'

const PrivateComponent = () => {


   const {checkUser , isloggedIn} = useAuthStatus()

   if(checkUser) {
      return(
         <LoaderComponent />
      )
   }

   return isloggedIn ? <Outlet /> : <Navigate to={"/login"} />



}

export default PrivateComponent
