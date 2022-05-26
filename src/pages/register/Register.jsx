import React, { Component } from 'react'
import './register.css'
import loginImg from '../../assets/img/loginImg.png'
import logo from '../../assets/img/logo.png'
import googleLogo from '../../assets/img/googleLogo.png'
import Footer from '../../components/footer/Footer'
import axios from 'axios'

export default class Register extends Component{
  state={
    email : "",
    password : "",
    phone : "",
    msg :""
  }

  render(){
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
                      <div className="btn-signUp">Login</div>
                  </div>
                  <div className="loginText">
                      <p>Register</p>
                  </div>
                  <form  className="loginForm" action="">
                      <label className="inputLabel" htmlFor='email'>Email Addres :</label>
                      <input className="input" 
                      value={this.state.email} onChange={(e)=>{
                        this.setState({
                          email : e.target.value
                        })
                      }}
                      type="text" placeholder="Enter your email addres"/>
                      <label className="inputLabel" htmlFor='password'>Password :</label>
                      <input className="input"
                      value={this.state.password} onChange={(e)=>{
                        this.setState({
                          password : e.target.value
                        })
                      }}
                      type="password" placeholder="Enter your password"/>
                      <label className="inputLabel" htmlFor='phone'>Phone Number:</label>
                      <input className="input" 
                      value={this.state.phone} onChange={(e)=>{
                        this.setState({
                          phone : e.target.value
                        })
                      }}                     
                      type="text" placeholder="Enter your phone number"/>
                      <p className="forgotPassword">Forgot Password?</p>
                      <div className="btn-login"
                      onClick={()=>{
                        const {email, password, phone} = this.state
                        const body = {
                        email,
                        password,
                        phone
                      }
                      axios.post('http://localhost:8000/auth/register', body)
                      .then(result=>{
                        console.log(result.data);
                        alert(`${result.data.data.msg}`)
                      })
                      .catch(err=>{
                        console.log(err);
                        alert(err.response.data.msg)
                        this.setState({
                          msg : err.response.data.err.msg
                        })
                      })
                      }}
                      >Register</div>
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

}