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
        detailProduct : [],
        time : new Date(Date.now()),
        count : 1,
        pick : false,
        size : 'Regular',
        productCart : [],
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
    addToCart = ()=>{
        const singleCart = {
            idProduct : this.state.detailProduct.id,
            name : this.state.detailProduct.name,
            price : this.state.detailProduct.price,
            deliveryMethod : this.state.pick,
            quantity : this.state.count,
            size : this.state.size,
            productImg : this.state.detailProduct.pictures
        }
        this.state.productCart.push(singleCart)
        localStorage.setItem('cart', JSON.stringify(this.state.productCart))
        console.log(this.state.productCart);
    }
render() {
    return (
    <>
        <Header product={this.state.detailProduct} {...this.props}/>
        Favorit and Promo
        {localStorage.getItem('productCart')}
        <div className="row containerDetailProduct">
            <div className="col-lg-6 leftProduct">
                <img className='imgDetailProduct' src={`http://localhost:8000${this.state.detailProduct.pictures}`} alt="" />
                <div className="delivery">
                    <div className="delivTitle">Delivery and Time</div>
                    <div className="deliveryMethod">
                        <div className={this.state.pick === 'Dine in' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                            this.setState({
                                pick : 'Dine in'
                            })
                        }}>Dine in</div>
                        <div className={this.state.pick === 'Door Delivery' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                            this.setState({
                                pick : 'Door Delivery'
                            })
                        }}>DoorDelivery</div>
                        <div className={this.state.pick === 'Pick Up' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                            this.setState({
                                pick : 'Pick Up'
                            })
                        }}>Pick Up</div>
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
                        <div className="minus" onClick={()=>{
                            this.setState({
                                count : this.state.count - 1
                            })
                            if(this.state.count === 1){
                                this.setState({
                                    count : 1
                                })
                            }
                        }}> - </div>
                        <div className="lineButton"></div>
                        <div className="numb"> {this.state.count} </div>
                        <div className="lineButton"></div>
                        <div className="plus" onClick={()=>{
                            this.setState({
                                count : this.state.count + 1
                            })
                        }}> + </div>
                    </div>
                    <div className="priceDetail"> IDR {this.state.detailProduct.price}</div>
                </div>
                <Link to='/your-cart'><div className="addtoCart" onClick={this.addToCart}>Add to Cart</div></Link> 
                <div className="askToStaff">Ask to Staff</div>
            </div>
            <div className="col-lg-12 choose">
                <div className="size">
                    <div className="sizeTitle">
                        Choose a size
                    </div>
                    <div className="sizeRow">
                    <div className={this.state.size === 'Regular'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                        this.setState({
                            size : 'Regular'
                        })
                    }}>R</div>
                    <div className={this.state.size === 'Large'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                        this.setState({
                            size : 'Large'
                        })
                    }}>L</div>
                    <div className={this.state.size === 'XtraLarge'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                        this.setState({
                            size : 'XtraLarge'
                        })
                    }}>XL</div>
                    </div>
                </div>
                <div className="checkOut">
                    <div className="checkOutLeft">
                        <img src={`http://localhost:8000${this.state.detailProduct.pictures}`} alt="" />
                        <div className="detailOrder">
                            <h3>{this.state.detailProduct.name}</h3>
                            <p>x {this.state.count} ({this.state.size})</p>
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