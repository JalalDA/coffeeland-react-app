import React, { Component } from 'react'
import './product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import withParam from '../../helpers/withParam'
import arrow from '../../assets/img/ArrowRight.png'
import { Link } from 'react-router-dom'

class Product extends Component {
    state={
        detailProduct : []
    }
    async componentDidMount(){
        try {
            const {params} = this.props
            const result = await axios.get(`http://localhost:8000/product/${params.id}`)
            console.log(result.data);
            this.setState({
                detailProduct : result.data.data
            })
        } catch (error) {
            console.log(error);
        }
    }

render() {
    return (
    <>
        <Header product={this.state.detailProduct} {...this.props}/>
        Favorit and Promo
        <div className="row containerDetailProduct">
            <div className="col-lg-6 leftProduct">
                <img className='imgDetailProduct' src={`http://localhost:8000${this.state.detailProduct.pictures}`} alt="" />
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
                            <input className='inputTime' type="text" placeholder='' />
                        </div>
                </div>
            </div>
            <div className="col-lg-6 rightProduct">
                <div className="productTitleDetail">{this.state.detailProduct.name}</div>
                <div className="productDesc">{this.state.detailProduct.descriptions}</div>
                <div className="timeDeliveryText">Delivery only on <b>monday to friday</b> at <b>1 - 7 PM</b></div>
                <div className="count">
                    <div className="countButton">
                        <div className="minus"> - </div>
                        <div className="lineButton"></div>
                        <div className="numb"> 2 </div>
                        <div className="lineButton"></div>
                        <div className="plus"> + </div>
                    </div>
                    <div className="priceDetail"> IDR {this.state.detailProduct.price}</div>
                </div>
                <div className="addToCart" >
                    <Link className='linktoCart' to='/your-cart'>Add to Cart</Link>
                </div>
                <div className="askToStaff">Ask to Staff</div>
            </div>
            <div className="col-lg-12 choose">
                <div className="size">
                    <div className="sizeTitle">
                        Choose a size
                    </div>
                    <div className="sizeRow">
                    <span> R</span>
                    <span> L</span>
                    <span>XL</span>
                    </div>
                </div>
                <div className="checkOut">
                    <div className="checkOutLeft">
                        <img src={`http://localhost:8000${this.state.detailProduct.pictures}`} alt="" />
                        <div className="detailOrder">
                            <h3>{this.state.detailProduct.name}</h3>
                            <p>x1 (Large)</p>
                            <p>x1 (Regular)</p>
                        </div>
                    </div>
                    <div className="checkoutRight">
                        <span>Checkout</span>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}
}
export default withParam(Product)