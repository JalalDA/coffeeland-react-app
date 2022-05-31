import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import bgForgot from '../../assets/img/bg-forgot.png'
import './forgot.css'

export default class Forgot extends Component {
  render() {
    return (
      <>
        <div className='forgotContainer'>
          <img className='forgotImg' src={bgForgot} alt="" />
          <div className="forgotForm">
            <div className="forgotTitle">
            <span>Forgot your password</span>
            <p>Don't worry, we got your back</p>
            </div>
            <div className="inputForgot">
              <input type="text" placeholder='input your email adress to get link' />
              <span>Send</span>
            </div>
            <div className="forgotReceive">
            <p>Click Here if you didn't receive any link </p>
            <p>in 2 minutes</p>
            <div className="resendLink">Resend Link</div>
            <p>01 : 54</p>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}
