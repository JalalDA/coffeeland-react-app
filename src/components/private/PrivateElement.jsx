import React from 'react'
import { useSelector } from 'react-redux'
// import { useState } from 'react'
import { Navigate } from 'react-router-dom'

// import PromptLogin from '../prompt/PromptLogin'
// import { useNavigate } from 'react-router-dom'

const PrivateElement = ({
    children, 
    allowedRole,
    redirectTo ='/',
    isRouteReplaced = true,
    extraData = 'Please login first',
    show = false
}) => {
    // // const navigate = useNavigate()
    // const [showLogin, setShowLogin] = useState('')
    const token = useSelector(state=>state.login.value.token)
    const persist = JSON.parse(localStorage.getItem('persist:persist'))
    if(!persist){
        // setShowLogin(true)
        return(
            <Navigate  to={redirectTo} replace={isRouteReplaced} state={extraData} />
        )
    }
    if(!token) {
        // setShowLogin(true)
        return(
            <Navigate 
            to={redirectTo} replace={isRouteReplaced} state={extraData} show={show}
            />
        )
    }
  return (
    children
  )
}

export default PrivateElement