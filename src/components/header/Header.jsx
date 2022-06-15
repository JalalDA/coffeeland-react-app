import React, { Component } from 'react'
import './header.css'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import profile from '../../assets/img/nullProfile.png'
import chat from '../../assets/img/chat.png'
import { Link } from 'react-router-dom'
import navigate from '../../helpers/Navigate'
import {connect} from 'react-redux'
import Modal from '../Modal/Modal'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            product : [],
            isSearch : true,
            user : false,
            statePhoto : true,
            setSearchName : props,
            profileImg : '',
            show : false
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
        const {photo} = this.props
        if(!photo){
            this.setState({
                statePhoto : false,
            })
        }
        if(photo){
            this.setState({
                profileImg : photo
            })
        }
    }
    render() {
        const {navigate, role, token} = this.props
        const searchButton = ()=>{
            this.setState({
                isSearch : false
            })
        }
        return (
        <>
        <Modal show={this.state.show} onClose={()=>{
            this.setState({
                show : false
            })
        }} response='Please Login First'/>
            <div className="row header sticky-top">
            <div className="col-sm-3 logoHeader">
                <div className="logoImgHeader">
                    <img src={logo} alt=""/>
                </div>
                <div>Coffeeland</div>
            </div>
            <ul className="col-sm-6 navigasi nav">
                {role === 'admin' ? 
                <>
                <li className='listNavItem nav-item'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='listNavItem nav-item'>
                        <Link className='link' to='/products'>Product</Link>
                    </li>
                    <li className='listNavItem nav-item'>
                        <Link className='link' to='/orders'>Orders</Link>
                    </li>
                    <li className='listNavItem nav-item'>
                        <Link className='link' to='/dashboard'>Dashboard</Link>
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
                        <Link className='link' to='/your-cart' onClick={()=>{
                            if(!token){
                                this.setState({
                                    show : true
                                })
                            }
                        }}>Your Chart</Link>
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
        value : {role, token},
        photo 
    }} = reduxState 
    return {role, photo, token}
}


export default connect(mapStateToProps)(navigate(Header))