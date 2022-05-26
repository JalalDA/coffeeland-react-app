import React, { Component } from 'react'
import './product.css'
import coldBrew from '../../assets/img/coldbrew.png'
import trashBox from '../../assets/img/trashBox.png'


export default class Product extends Component {
render() {
    return (
    <div>Favorit and Promo
        <div className="row contianer">
            <div className="col-lg-6 leftProduct">
                <div className="imgProduct">
                    <img className='img' src={coldBrew} alt="" />
                    <div className="trashBox">
                        <img src={trashBox} alt="" />
                    </div>
                </div>
                <div className="delivery">
                    <div className="delivTitle">Delivery and Time</div>
                    <div className="deliveryMethod">
                        <div className="dineIn">Dine in</div>
                        <div className="dineIn">DoorDelivery</div>
                        <div className="dineIn">Pick Up</div>
                    </div>
                    <div className="setTime">
                            <div className='now'>Now</div>
                            <div className="dineIn">Yes</div>
                            <div className="dineIn">No</div>
                    </div>
                    <div className="inputSetTime">
                            <div className='setTimeText'>Set Time</div>
                            <input className='inputTime' type="text" placeholder='enter time for reservation' />
                        </div>
                </div>
            </div>
            <div className="col-lg-6 rightProduct">
                <div className="productTitle"></div>
                <div className="productDesc"></div>
                <div className="count">
                    <div className="countMenu"></div>
                    <div className="price"></div>
                </div>
                <div className="editProduct"></div>
            </div>
            <div className="col-lg-12 choose">
                <div className="size"></div>
                <div className="checkOut"></div>
            </div>
        </div>
    </div>
    )
}
}
