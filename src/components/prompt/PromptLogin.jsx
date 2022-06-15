import React from 'react'
import './prompt.css'
// import { useNavigate } from 'react-router-dom'
const PromptLogin = (props) => {
    // const navigate = useNavigate()
    if(!props.showLogin){
        return null
    }
  return (
    <>
    <div className="prompt">
        <div className="promptContent">
            <div className="promptHeader"></div>
            <div className="promptMessage">Please Login First</div>
            <div className="promptButton">
                <div className="no" onClick={props.onClose}>NO</div>
                <div className="yes" onClick={props.yes}>YES</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PromptLogin