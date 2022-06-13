import React, { Component } from 'react'
import './header.css'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import profile from '../../assets/img/nullProfile.png'
import chat from '../../assets/img/chat.png'
import { Link } from 'react-router-dom'
import navigate from '../../helpers/Navigate'
import {connect} from 'react-redux'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            product : [],
            isSearch : true,
            user : false,
            statePhoto : true,
            setSearchName : props,
            profileImg : ''
        }
    }
    componentDidMount(){
        const persist = JSON.parse(localStorage.getItem('persist:persist'))
        if(persist){
        const login = JSON.parse(persist.login)
        // const token = login.value.token
        // const photo = login.photo
        if(login.value.token){
            this.setState({
                user : true
            })
        }
        // if(login.photo){
        //     this.setState({
        //         profileImg : photo
        //     })
        // }
        }
        const photo = localStorage.getItem('photo')
        if(photo === 'null'){
            this.setState({
                statePhoto : false,
            })
        }
        if(photo !== 'null'){
            this.setState({
                profileImg : photo
            })
        }
    }
    render() {
        const {navigate, role} = this.props
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
                {role === 'admin' ? 
                <>
                <li className='listNavItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/products'>Product</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/orders'>Orders</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/history'>Dashboard</Link>
                    </li>
                </> 
                :
                <>
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
                    </li></>}
                    
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
                    {this.state.statePhoto ? <img  className='profileImg' src={`http://localhost:8000${this.state.profileImg}`} alt=""/> : <img  className='profileImg' src={profile} alt=""/>}
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

const mapStateToProps = (reduxState)=>{
    const {login : {
        value : {role}
    }} = reduxState
    return {role}
}


export default connect(mapStateToProps)(navigate(Header))