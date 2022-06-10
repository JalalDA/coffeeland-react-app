import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import arrow from '../../assets/img/ArrowRight.png'
import { useDispatch, useSelector } from 'react-redux'
import {addtocart} from '../../redux/reducers/cartSlice'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Producttest = (props) => {
    const cart = useSelector((state)=> state.cart.value)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [detailProduct, setDetailProduct] = useState([])
    const [pick, setPick] = useState('')
    const [size, setSize] = useState('')
    const {id} = useParams()
    const detail = {
        size,
        deliveryMethod : pick,
        count
    }
    useEffect(()=>{
        const getDetailProduct = async ()=>{
            try {
                const result = await axios.get(`http://localhost:8000/product/${id}`)
                console.log(result);
                setDetailProduct(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetailProduct()
    }, [id])
return (
        <>
            <Header/>
            Favorit and Promo
            <div className="row containerDetailProduct">
                <div className="col-lg-6 leftProduct">
                    <img className='imgDetailProduct' src={`http://localhost:8000${detailProduct.pictures}`} alt="" />
                    <div className="delivery">
                        <div className="delivTitle">Delivery and Time</div>
                        <div className="deliveryMethod">
                            <div className={pick === 'Dine in' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                                setPick('Dine in')
                            }}>Dine in</div>
                            <div className={pick === 'Door Delivery' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                                setPick('Door Delivery')
                            }}>DoorDelivery</div>
                            <div className={pick === 'Pick Up' ? 'dineInActive' : 'dineIn'} onClick={()=>{
                                setPick('Pick Up')
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
                    <div className="productTitleDetail">{detailProduct.name}</div>
                    <div className="productDesc">{detailProduct.descriptions}</div>
                    <div className="timeDeliveryText">Delivery only on <b>monday to friday</b> at <b>1 - 7 PM</b></div>
                    <div className="count">
                        <div className="countButton">
                            <div className="minus" onClick={()=>{
                                setCount(count - 1 )
                                if(count === 1){
                                    setCount(count === 1)
                                }
                            }}> - </div>
                            <div className="lineButton"></div>
                            <div className="numb"> {count} </div>
                            <div className="lineButton"></div>
                            <div className="plus" onClick={()=>{
                                setCount(count + 1)
                            }}> + </div>
                        </div>
                        <div className="priceDetail"> IDR {detailProduct.price}</div>
                    </div>
                    <Link to='/your-cart'>
                    <div className="addtoCart"
                        onClick={()=>{
                        dispatch(addtocart(detail))
                        }}>
                        Add to Cart
                    </div>
                    </Link>
                    <div className="askToStaff">Ask to Staff</div>
                </div>
                <div className="col-lg-12 choose">
                    <div className="size">
                        <div className="sizeTitle">
                            Choose a size
                        </div>
                        <div className="sizeRow">
                        <div className={size === 'Regular'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                            setSize('Regular')
                        }}>R</div>
                        <div className={size === 'Large'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                            setSize('Large')
                        }}>L</div>
                        <div className={size === 'XtraLarge'? 'sizeRowPick' : 'sizeRowNotPick'} onClick={()=>{
                            setSize('Xtra Large')
                        }}>XL</div>
                        </div>
                    </div>
                    <div className="checkOut">
                        <div className="checkOutLeft">
                            <img src={`http://localhost:8000${detailProduct.pictures}`} alt="" />
                            <div className="detailOrder">
                                <h3>{}</h3>
                                <p>x {count} ({size})</p>
                            </div>
                        </div>
                        <div className="checkoutRight">
                            <span>Checkout</span>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        )
}

export default Producttest