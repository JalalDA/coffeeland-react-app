import React from 'react'
import './modal.css'

const Modal = (props) => {
    if(!props.show){
        return null
    }
return (
    <>
    <div className="modal">
        <div className="modalContent">
            <div className="modalHeader">
                <div className="modalTitle">{props.response}</div>
                <div className="modalBody"></div>
                <div className="modalFooter">
                    <div className='modalButton' onClick={props.onClose}>Close</div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Modal