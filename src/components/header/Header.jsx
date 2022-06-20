import React from 'react'
import logo from '../../assets/img/logo.png'
import './headerFunction.css'
import { useState } from 'react'
import iconX from '../../assets/img/iconX.png'
import { useSelector } from 'react-redux'
import searchIcon from '../../assets/img/search.png'
import messageIcon from '../../assets/img/chat.png'
import nullProfile from '../../assets/img/nullProfile.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Header = (props) => {
    const [showToggle, setShowToggle] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const token = useSelector(state=> state.login.value.token)
    const photo = useSelector(state=> state.login.photo)
    const role = useSelector(state=>state.login.value.role)
    const navigate = useNavigate()
  return (
    <>
    <div className="headerContainer">
        <div className="logoHeaderF">
            <img src={logo} alt="" />
            <div>Coffeeland</div>
        </div>
        <ul  className={`list ${showToggle ? 'show' : ''}`}>
            <img src={iconX} alt="" className="iconX" onClick={()=>{
                setShowToggle(false)
            }}/>
            <Link className='linkHeader' to='/'><li>Home</li></Link>
            <Link className='linkHeader' to='/products'><li>Product</li></Link>
            {role !== 'admin'? 
            <>
                <Link className='linkHeader' to='/your-chart'><li>Your Cart</li></Link>
                <Link className='linkHeader' to='/history'><li>History</li></Link>
            </>
            :
            <>
                <Link className='linkHeader' to='/orders'><li>Orders</li></Link>
                <Link className='linkHeader' to='/dashboard'><li>Dashboard</li></Link>
            </>}
            <div className="auth">
                {token ? 
                <div className="showLogin">
                    {isSearch ? 
                    <><input 
                    type='text' 
                    onKeyUp={(e)=>{
                        if(e.key === 'Enter'){
                            navigate('/products')
                            props.setSearchName(e.target.value)
                        }
                    }}
                    onChange
                    /> <div className='closeX' onClick={()=>{
                        setIsSearch(false)
                    }}>X</div></>:
                    <img src={searchIcon} alt="" onMouseOver={()=>{
                        setIsSearch(true)
                    }}/> }
                    <img src={messageIcon} alt="" />
                    <img className='nullProfile' src={photo ? `${photo}` : nullProfile} alt="profile" onClick={()=>{
                        navigate('/profile')
                    }}/>
                </div>
                :
                <div className="showLogin">
                <div className="btn-login-header" onClick={()=>{
                    navigate('/login')
                }}>LOGIN</div>
                <div className="btn-signUp-header" onClick={()=>{
                    navigate('/register')
                }}>SIGN UP</div>
            </div>}
        </div>
        </ul>
        <div className="menu-toggle" onClick={()=>{
            setShowToggle(true)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    </>
  )
}

export default Header