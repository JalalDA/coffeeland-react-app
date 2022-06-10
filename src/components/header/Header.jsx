import React, { Component } from 'react'
import './header.css'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import profile from '../../assets/img/nullProfile.png'
import chat from '../../assets/img/chat.png'
import { Link } from 'react-router-dom'
import navigate from '../../helpers/Navigate'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            product : [],
            isSearch : true,
            user : false,
            photo : true,
            setSearchName : props,
            profileImg : ''
        }
    }
    componentDidMount(){
        const persist = JSON.parse(localStorage.getItem('persist:persist'))
        const login = JSON.parse(persist.login)
        const token = login.value.token
        const photo = login.value.photo
        if(token){
            this.setState({
                user : true
            })
        }
        if(photo){
            this.setState({
                profileImg : photo
            })
        }
        if(photo === null){
            this.setState({
                photo : false
            })
        }
    }
    render() {
        const {navigate} = this.props
        const searchButton = ()=>{
            this.setState({
                isSearch : false
            })
        }
        return (
        <>
            <div className="row header sticky-top">
            <div className="col-sm-3 logoHeader">
                <div className="logoImgHeader">
                    <img src={logo} alt=""/>
                </div>
                <div>Coffeeland</div>
            </div>
            <ul className="col-sm-6 navigasi">
                    <li className='listNavItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/products'>Product</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/your-cart'>Your Chart</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/history'>History</Link>
                    </li>
            </ul>
            {this.state.user ? 
            <div className="col-sm-3 auth">
            <div className="searchIcon" onMouseOver={searchButton}>
            {this.state.isSearch ? <div><img src={search} alt=""/></div> : 
            <div className='showInput'><input className='inputSearch' placeholder='Search...' type="text" 
                onChange={(e)=>{
                    const valueSearh = e.target.value
                this.props.setSearchName(e.target.value)
                navigate(`/products?name=${valueSearh}`)
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
                    {this.state.photo ? <img  className='profileImg' src={`http://localhost:8000${this.state.profileImg}`} alt=""/> : <img  className='profileImg' src={profile} alt=""/>}
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
        </>
        )
    }
}

export default navigate(Header)