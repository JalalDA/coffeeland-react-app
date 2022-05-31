import React from 'react'
import './login.css'
import loginImg from '../../assets/img/loginImg.png'
import logo from '../../assets/img/logo.png'
import googleLogo from '../../assets/img/googleLogo.png'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  document.title = "Login"
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const login = async ()=>{
    try {
      const body = {
        email,
        password
      }
      const result = await axios.post('http://localhost:8000/auth/login', body)
      console.log(result);
      navigate('/', {replace:true})
      alert(result.data.msg)
      localStorage.setItem(
        "token",
        result.data.data.token
      )
      localStorage.setItem(
        "photo",
        result.data.data.photo
      )
    } catch (error) {
      console.log(error);
      console.log(setEmail);
      console.log(setPassword);
    }
  }
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
                    <label className="inputLabel" htmlFor=''>Email Addres</label>
                    <input className="input" 
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                    type="text" placeholder="Enter your email addres"/>
                    <label className="inputLabel" for="">Password</label>
                    <input className="input" 
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    type="password" placeholder="Enter your password"/>
                    <p className="forgotPassword">
                      <Link className='forgotPassword' to='/forgot-password'>Forgot Password?</Link>
                      </p>
                    <div className="btn-login-login" onClick={login}>
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
        <Footer/>
    </>
  )
}

export default Login