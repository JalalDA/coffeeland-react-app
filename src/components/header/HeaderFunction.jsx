import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import { useNavigate } from 'react-router-dom'
import chat from '../../assets/img/chat.png'


const HeaderFunction = () => {
    const [user, setUser] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const navigate = useNavigate()
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-4 header">
            <div className="container-fluid d-flex">
                <img src={logo} alt="img-icon" width="30" height="30" />
                <Link className="navbar-brand fw-bold px-3" to="/">
                    Coffeeland
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offset-2 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                Home
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/product">
                Product
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/payment">
                Your Cart
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/history">
                History
                </Link>
                </li>
                </ul>
                {user ? 
            <div className="mx-auto align-end auth">
            <div className="searchIcon" onMouseOver={()=>{setIsSearch(true)}}>
            {isSearch ? <div><img src={search} alt=""/></div> : 
            <div className='showInput'><input className='inputSearch' placeholder='Search...' type="text" 
                onChange={(e)=>{
                const valueSearh = e.target.value
                this.props.setSearchName(e.target.value)
                navigate(`/products?name=${valueSearh}`)
            }} onKeyUp={e=>{
                if(e.key === 'Enter'){
                    navigate('/products')
                }
            }}/>
            <p onClick={()=>{
                this.setState({
                    isSearch : true
                })
            }}>X</p>
            </div>}</div>
            <div className="message">
                <div className="messageCount">1</div>
                <img src={chat} alt=""/>
            </div>
            <div className="profil">
                <Link to="/profile">
                    {/* {this.state.statePhoto ? <img  className='profileImg' src={`http://localhost:8000${this.state.profileImg}`} alt=""/> : <img  className='profileImg' src={profile} alt=""/>} */}
                </Link>
            </div> 
            </div> : <div className="showLogin">
                <div className="loginButtonHeader">
                    <Link className='link' to="/login">Login</Link>
                </div>
                <div className="signUpButtonHeader">
                    <Link className='link' to="/register">Sign Up</Link>
                </div>
            </div>}
            </div>
            </div>
        </nav>
    </>
  )
}

export default HeaderFunction