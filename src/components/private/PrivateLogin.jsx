import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateLogin = ({
    children, 
    allowedRole,
    redirectTo ='/',
    isRouteReplaced = true,
    extraData = null
}) => {

    const persist = JSON.parse(localStorage.getItem('persist:persist'))
    if(persist){
        const login = JSON.parse(persist.login)
        const token = login.value.token
        if(token) {
        return(
            <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
        )
    }
    }
    const role = localStorage.getItem('role')
    if(role === 'admin'){
        <Navigate/>
    }
return (
    children
)
}

export default PrivateLogin