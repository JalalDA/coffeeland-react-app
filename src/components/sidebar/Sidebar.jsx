import React, { Component } from 'react'
import './sidebar.css'
import spagheti from '../../assets/img/spagheti.png'

export default class Sidebar extends Component {
  render() {
    return (
        <div className="col-lg-4 row sideBar">
                <div className="promoTitle">
                    <h3>Promo for you</h3>
                    <p>Coupons will be updated every weeks.</p>
                    <p>Check them out</p>
                </div>
                <div className="layer">
                    <div className="yellowLayer">
                            <img className='imgPromo' src={spagheti} alt=""/>
                            <h2>Beef Spagheti</h2>
                            <h2>20% OFF</h2>
                            <p>Buy 1 Choco Oreo and get 20% off</p>
                            <p>for Beef Spagheti</p>
                            <div className="dashLine"></div>
                            <p>COUPON CODE</p>
                            <h1>FNPR15RG</h1>
                            <p>Valid until October 10th 2022</p>    
                    </div>
                    <div className="blackLayer"></div>
                    <div className="brownLayer"></div>
                </div>
                <div className="applyCoupon">Apply Coupon</div>
                <div className="terms">
                        <h5>Terms and Condition</h5>
                        <p>1. You can only apply 1 coupon per day</p>
                        <p>2. It only for dine in</p>
                        <p>3. Buy 1 get 1 only for new user</p>
                        <p>4. Should make member card to apply coupon</p>
                </div>
        </div>
    )
  }
}
