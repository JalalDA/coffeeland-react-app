import React from 'react'
import './prompt.css'
// import { useNavigate } from 'react-router-dom'
const PromptLogout = (props) => {
    // const navigate = useNavigate()
    if(!props.showLogout){
        return null
    }
  return (
    <>
    <div className="prompt">
        <div className="promptContent">
            <div className="promptHeader"></div>
            <div className="promptMessage">Do you want to Logout?</div>
            <div className="promptButton">
                <div className="no" onClick={props.onClose}>NO</div>
                <div className="yes" onClick={props.yes}>YES</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PromptLogout