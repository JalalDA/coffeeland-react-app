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
    const role = useSelector(state=>state.login.value.role)
    if(!role){
        return(
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        )
    }
        
  return (
    children
  )
}

export default PrivateAdmin