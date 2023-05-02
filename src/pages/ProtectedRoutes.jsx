import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    
   
 if(localStorage.getItem("name1")){
    return <Outlet/>
 }else{
    return <Navigate to="/"/>
 }
}

export default ProtectedRoutes