import React from 'react'
import './login.css'
import loginImg from '../../assets/img/loginImg.png'
import logo from '../../assets/img/logo.png'
import googleLogo from '../../assets/img/googleLogo.png'

const Login = () => {
  return (
    <>
    <div className="headerContainer">
            <img className="img" src={loginImg} alt=""/>
            <div className="loginPage">
                <div className="loginHeader">
                    <div className="logo">
                      <div className="logoImg"><img className="imgLogo" src={logo} alt=""/></div>
                      <div className="logoText"><p>Coffeeland</p></div>
                    </div>
                    <div className="btn-signUp">Sign Up</div>
                </div>
                <div className="loginText">
                    <p>Login</p>
                </div>
                <form className="loginForm" action="">
                    <label className="inputLabel" for="">Email Addres</label>
                    <input className="input" type="text" placeholder="Enter your email addres"/>
                    <label className="inputLabel" for="">Password</label>
                    <input className="input" type="password" placeholder="Enter your password"/>
                    <p className="forgotPassword">Forgot Password?</p>
                    <div className="btn-login">
                        <p>Login</p>
                    </div>
                    <div className="btn-login-google">
                        <img src={googleLogo}alt=""/>
                        <p>Login with Google</p>
                    </div>
                </form>
            </div>
        </div>
        <div className="memberCardContainer">
            <div className="member-card">
              <div className="getMembertext">
                <p className="getMemberNow">Get your member <br/> card now!</p>
                <p className="letsJoin">Lets join with our member and enjoy the deals</p>
              </div>
              <div className="btn-member">
                Create now
              </div>
            </div>
        </div>
    </>
  )
}

export default Login