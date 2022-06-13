import React from 'react'
import './prompt.css'
import { useNavigate } from 'react-router-dom'
const Prompt = (props) => {
    const navigate = useNavigate()
    if(!props.show){
        return null
    }
  return (
    <>
    <div className="prompt">
        <div className="promptContent">
            <div className="promptHeader"></div>
            <div className="promptMessage">Do you want to Log out?</div>
            <div className="promptButton">
                <div className="no" onClick={props.onClose}>NO</div>
                <div className="yes" onClick={props.yes}>YES</div>
                {props.isLoggedOut? navigate('/') : ''}
            </div>
        </div>
    </div>
    </>
  )
}

export default Prompt