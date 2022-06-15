import React from 'react'
// import { useState } from 'react'
import { Navigate } from 'react-router-dom'

// import PromptLogin from '../prompt/PromptLogin'
// import { useNavigate } from 'react-router-dom'

const PrivateElement = ({
    children, 
    allowedRole,
    redirectTo ='/',
    isRouteReplaced = true,
    extraData = null
}) => {
    // // const navigate = useNavigate()
    // const [showLogin, setShowLogin] = useState('')
    const persist = JSON.parse(localStorage.getItem('persist:persist'))
    if(!persist){
        // setShowLogin(true)
        return(
            <Navigate  to={redirectTo} replace={isRouteReplaced} state={extraData} />
        )
    }
    const login = JSON.parse(persist.login)
    const token = login.value.token
    if(!token) {
        // setShowLogin(true)
        return(
            <Navigate 
            to={redirectTo} replace={isRouteReplaced} state={extraData} 
            />
        )
    }
  return (
    children
  )
}

export default PrivateElement