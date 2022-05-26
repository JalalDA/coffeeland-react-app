import React, { Component } from 'react'
import './footer.css'
import logo from '../../assets/img/logo.png'
import fb from '../../assets/img/fb.png'
import twitter from '../../assets/img/twitter.png'
import ig from '../../assets/img/ig.png'

export default class Footer extends Component {
render() {
    return (
    <div>
        <footer className="row footer">
            <div className="col-sm-6 about">
                <div className="aboutHeader d-flex align-items-center" >
                    <div className="footerlogo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>Coffeeland</div>
                </div>
                <div className="aboutText">
                    Coffeeland is a store that sells some good <br/>meals, and especially coffee. We provide <br/>high quality beans
                </div>
                <div className="socialIcon">
                        <img className="imgIcon" src={fb} alt=""/>
                        <img className='imgIcon' src={twitter} alt=""/>
                        <img className='imgIcon' src={ig} alt=""/>
                </div>
                <div className="waterMark">
                    <p>&#169;2022Coffeeland</p>
                </div>
            </div>
            <div className="col-sm-6 footerSide">
                <div className="product">
                    <div className="productList">Product</div>
                        <p>Download</p>
                        <p>Pricing</p>
                        <p>Locations</p>
                        <p>Countries</p>
                        <p>Blog</p>
                </div>
                <div className="engage">
                    <div className="engageList">Engage</div>
                    <p>Coffeland?</p>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </div>
            </div>
        </footer>
    </div>
    )
}
}
