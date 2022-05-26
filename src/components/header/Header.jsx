import React, { Component } from 'react'
import './header.css'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import profile from '../../assets/img/pp.png'
import chat from '../../assets/img/chat.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            product : [],
            cari : true
        }
    }

    componentDidMount(){
    }
    render() {
        const searchButton = ()=>{
            this.setState({
                cari : false
            })
        }
        const getProfile = ()=>{
            fetch('http://localhost:8000/product/all').then(response => response.json()).then(data => 
            this.setState({
                product : data.data
            }))
        }
        return (
        <>
            <div className="row header sticky-top">
            <div className="col-sm-3 logo">
                <div className="logoImg">
                    <img src={logo} alt=""/>
                </div>
                <div>Coffeeland</div>
            </div>
            <ul className="col-sm-6 navigasi">
                    <li className='listNavItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/product'>Product</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/Login'>Your Chart</Link>
                    </li>
                    <li className='listNavItem'>
                        <Link className='link' to='/Login'>History</Link>
                    </li>
            </ul>
            <div className="col-sm-3 auth">
                <div className="searchIcon" onMouseOver={searchButton} onMouseLeave={()=>{
                    this.setState({
                        cari : true
                    })
                }}>
                <div>{this.state.cari ? <div> <img src={search} alt=""/></div> : <div className='searching'><input className='inputSearch' type="text"/>
                    <img src={search} alt=""/></div>}</div>
                </div>
                <div className="message">
                    <div className="messageCount">1</div>
                    <img src={chat} alt=""/>
                </div>
                <div className="profil">
                    <img onClick={getProfile} className='profileImg' src={profile} alt=""/>
                    <ul>{this.state.product}</ul>
                </div>
            </div>
        </div>
        </>
        )
    }
}
