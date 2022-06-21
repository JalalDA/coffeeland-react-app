import React from 'react'
import './login.css'
import loginImg from '../../assets/img/loginImg.png'
import logo from '../../assets/img/logo.png'
import googleLogo from '../../assets/img/googleLogo.png'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import eye from '../../assets/img/eye.png'
import eyeSlash from '../../assets/img/eye-slash.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/loginSlice'


const Login = () => {
  document.title = "Login"
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useSelector((state)=>state.login.value)
  const photo = useSelector((state)=>state.login.photo)
  const isSucces = useSelector((state)=>state.login.isSucces)
  // const login = async ()=>{
  //   try {
  //     const body = {
  //       email,
  //       password
  //     }
  //     const result = await axios.post('http://localhost:8000/auth/login', body)
  //     console.log(result);
  //     setShow(true)
  //     setMsg(result.data.msg)
  //     localStorage.setItem(
  //       "token",
  //       result.data.data.token
  //     )
  //     localStorage.setItem(
  //       "photo",
  //       result.data.data.photo
  //     )
  //   } catch (error) {
  //     console.log(error);
  //     console.log(setEmail);
  //     console.log(setPassword);
  //   }
  // }
  const body = {
    email,
    password
  }
  console.log(userInfo);
  return (
    <>
    <div className="headerContainerLogin">
      <Modal show={show} response={isSucces ? 'RegisterSucces' : 'Email or Password is wrong'} onClose={()=>{
        localStorage.setItem('photo', photo)
        setShow(false)
        if(isSucces){
          navigate('/', {replace:true})
        }
      }}/>
            <img className="img" src={loginImg} alt=""/>
            <div className="loginPage">
                <div className="loginHeader">
                    <div className="logo">
                      <div className="logoImg"><img className="imgLogo" src={logo} alt=""/></div>
                      <div className="logoText"><p>Coffeeland</p></div>
                    </div>
                    <div className="btn-signUp">
                      <Link className='linkSignup' to="/register">Sign Up</Link>
                    </div>
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
                    <label className="inputLabel" htmlFor="">Password</label>
                    <input className="input" value={password} onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    type={showPass?"text" : "password"}   placeholder="Enter your password"/>
                    {showPass? <img src={eye} alt="" onClick={()=>{
                      setShowPass(false)
                    }}/> : <img src={eyeSlash} alt="" onClick={()=>{
                      setShowPass(true)
                    }}/> }
                    
                    <p className="forgotPassword">
                      <Link className='forgotPassword' to='/forgot-password'>Forgot Password?</Link>
                      </p>
                    <div className="btn-login-login"
                    onClick={()=>{
                      dispatch(getUserInfo(body))
                      setShow(true)
                    }}
                    >
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