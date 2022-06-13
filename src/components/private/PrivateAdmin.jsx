import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateAdmin = ({
    children, 
    allowedRole,
    redirectTo ='/',
    isRouteReplaced = true,
    extraData = null
}) => {
    const userInfo = useSelector(state=>state.login.value)
    const role = userInfo[0].role
    if(role === 'Admin'){
        return(
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        )
    }
        
  return (
    children
  )
}

export default PrivateAdmin