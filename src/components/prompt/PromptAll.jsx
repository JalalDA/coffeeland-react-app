import React from 'react'
import './prompt.css'
// import { useNavigate } from 'react-router-dom'
const PromptAll = (props) => {
    // const navigate = useNavigate()
    if(!props.showPrompt){
        return null
    }
  return (
    <>
    <div className="prompt">
        <div className="promptContent">
            <div className="promptHeader"></div>
            <div className="promptMessage">{props.sure}</div>
            <div className="promptButton">
                <div className="no" onClick={props.onClose}>NO</div>
                <div className="yes" onClick={props.yes}>YES</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PromptAll