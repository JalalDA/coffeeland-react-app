import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import arrow from '../../assets/img/ArrowRight.png'
import { useDispatch, useSelector } from 'react-redux'
import {addtocart} from '../../redux/reducers/cartSlice'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import trash from '../../assets/img/trashBox.png'
import PromptAll from '../../components/prompt/PromptAll'

const Product = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
    const [detailProduct, setDetailProduct] = useState([])
    const [pick, setPick] = useState('')
    const [size, setSize] = useState('')
    const [time, setTime] = useState('')
    const [showPrompt, setShowPrompt] = useState(false)
    const persist = JSON.parse(localStorage.getItem('persist:persist'))
    const login = JSON.parse(persist.login)
    const token = login.value.token
    const role = useSelector(state=>state.login.value.role)
    // const [response, setResponse] = useState('')
    const {id} = useParams()
    const detail = {
        detailProduct,
        size,
        deliveryMethod : pick,
        count,
        time
    }
    const deleteProduct = async ()=>{
        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
            const result = await axios.delete(`${process.env.REACT_APP_SERVER}/product/${id}`, config)
            console.log(result.data.msg);
            navigate('/products')
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const getDetailProduct = async ()=>{
            try {
                const result = await axios.get(`${process.env.REACT_APP_SERVER}/product/${id}`)
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
            <Modal show={show} response={token ? 'Succes add to Cart' : 'Please login first'} onClose={()=>{
                setShow(false)
                navigate('/your-cart')
            }}/>
            <PromptAll showPrompt={showPrompt} onClose={()=>{
                setShowPrompt(false) 
            }} sure={<>Do you want to delete product?</>} yes={deleteProduct}/>
            <div className='detailProductTittle'>Favorit and Promo {'>'} <b>{detailProduct.name}</b></div> 
            <div className="row containerDetailProduct">
                <div className="col-lg-6 leftProduct">
                    <div className="imgDetailProductContainer">
                    <img className='imgDetailProduct' src={`${process.env.REACT_APP_SERVER}${detailProduct.pictures}`} alt=""/>
                    {role === 'admin' ? 
                    <div className='trashBox' onClick={()=>{
                        setShowPrompt(true)
                    }}>
                    <img src={trash} alt="" />
                    </div> : ''}
                    </div>
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
                                <div className={time=== 'Now' ? 'dineInActive' : 'dineIn' }
                                onClick={()=>{
                                    setTime('Now')
                                }}
                                >Yes</div>
                                <div className={time=== 'notnow' ? 'dineInActive' : 'dineIn' }
                                onClick={()=>{
                                    setTime('notnow')
                                }}>No</div>
                        </div>
                        <div className="inputSetTime">
                                <div className='setTimeText'>Set Time</div>
                                <input className='inputTime' type="time"  placeholder='' onChange={(e)=>{
                                    setTime(e.target.value)
                                }} />
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
                    <div className="addtoCart"
                        onClick={()=>{
                        dispatch(addtocart(detail))
                        setShow(true)
                        }}>
                        Add to Cart
                    </div>
                    {role === 'admin' ?
                    <div className="askToStaff" onClick={()=>{
                        navigate('/editproduct')
                    }}>Edit Product</div> : 
                    <div className="askToStaff">Ask to Staff</div>}

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
                            <img src={`${process.env.REACT_APP_SERVER}${detailProduct.pictures}`} alt="" />
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

export default Product