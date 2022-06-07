import React from 'react'
import './modal.css'

const Modal = (props) => {

return (
    <>
    <div className={`modal ${props.show ? 'show' : ''}`}>
        <div className="modalContent">
            <div className="modalHeader">
                <div className="modalTitle">{props.response}</div>
                <div className="modalBody"></div>
                <div className="modalFooter">
                    <div className='modalButton' onClick={props.onClose}>Ok</div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Modal