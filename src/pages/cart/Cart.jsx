import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bgCart from '../../assets/img/bg-cart.png'
import cardPayment from '../../assets/img/card.png'
import bankPayment from '../../assets/img/dashicons_bank.png'
import cod from '../../assets/img/cod.png'
import './cart.css'
import axios from 'axios'
import { useSelector} from 'react-redux'
import Modal from '../../components/Modal/Modal'

const Cart = (props) => {
    document.title = 'Your Cart'
    const taxAndFee = 20000
    const shipping = 10000
    const cart = useSelector(state=> state.cart.value)
    console.log(cart);
    const subTotal = cart.count * cart.detailProduct.price
    const delivery_method = cart.deliveryMethod
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [display_name, setDisplayName] = useState('')
    const [payment_method, setPaymentMethod] = useState('')
    const [user_id, setUser_id] = useState('')
    const [show, setShow] = useState(false)
    useEffect(()=>{
        const getDataProfile = async()=>{
            const persist = JSON.parse(localStorage.getItem('persist:persist'))
            const login = JSON.parse(persist.login)
            const token = login.value.token
            const config = {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
            const result = await axios.get('http://localhost:8000/user', config)
            setUser_id(result.data.data[0].id)
            setDisplayName(result.data[0].data.display_name)
            setAdress(result.data.data[0].delivery_adress)
            setPhone(result.data.data[0].phone)
        }
        getDataProfile()
    }, [])
    const pay = async ()=>{
        try {
            const persist = JSON.parse(localStorage.getItem('persist:persist'))
            const login = JSON.parse(persist.login)
            const token = login.value.token
            const config = {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
        const body = {
            product_name : cart.detailProduct.name,
            user_name : display_name,
            adress : adress,
            time_transaction : new Date(Date.now()),
            promo_code : '',
            delivery_cost : shipping,
            tax : taxAndFee,
            total_payment : subTotal + taxAndFee + shipping,
            payment_method : payment_method,
            delivery_method : delivery_method, 
            user_id : user_id,
            product_image : cart.detailProduct.pictures
        }
        const result = await axios.post('http://localhost:8000/transaction', body, config)
        console.log(result);
        setShow(true)
        } catch (error) {
            console.log(error);
        }
    }
return (
    <>
    <Header/>
    <Modal show={show} response={
    <div>
    <p>Succes add Transaction</p>
    <p>Product Name : {cart.detailProduct.name}</p>
    <p>Payment Methode : {payment_method}</p>
    <p>Delivery Method : {delivery_method} </p>
    <p>Total Payment : IDR {subTotal + taxAndFee + shipping}</p>
    </div>
} onClose={()=>{
        setShow(false)
    }}/>
    <div className="cartContainer">
        <img src={bgCart} alt="backgroundCart" />
        <span>Checkout Your Item Now!</span>
        <div className="cardCart">
            <div className="leftCart">
                <h3>Order Summary</h3>
                <div className="productListCart">
                    <div className="firstProduct">
                        <img src={`http://localhost:8000${cart.detailProduct.pictures}`} alt="" />
                        <div className='productCartDetail'>
                            <p>{cart.detailProduct.name}</p>
                            <p>X {cart.count}</p>
                            <p>{cart.size}</p>
                        </div>
                        <span>IDR {cart.detailProduct.price}</span>
                    </div>
                </div>
                <div className="lineCart"></div>
                <div className="subTotal">
                    <p>SUBTOTAL</p>
                    <p>{cart.count * cart.detailProduct.price}</p>
                </div>
                <div className="subTotal">
                    <p>TAX & FEES</p>
                    <p>{taxAndFee}</p>
                </div>
                <div className="subTotal">
                    <p>SHIPPING</p>
                    <p>{shipping}</p>
                </div>
                <div className="totalPaymentCart">
                    <p>TOTAL</p>
                    <p>{subTotal+taxAndFee+shipping}</p>
                </div>
            </div>
            <div className="rightCart">
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Adress detail</h3>
                    <p>Edit</p>
                    </div>
                    <div className="deliveryCardCart">
                    <p> <b>Delivery to </b> {adress}</p>
                    <div className="lineDeliveryCart"></div>
                    <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                    <div className="lineDeliveryCart"></div>
                    <p>{phone}</p>
                    </div>
                </div>
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="deliveryCardCart">
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Card Payment' onChange={(e)=>{
                            setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={cardPayment} alt=""/>
                        <p>Card</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Bank Payment' onChange={(e)=>{
                            setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={bankPayment} alt=""/>
                        <p>Bank Account</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Cash On Delivery' onChange={(e)=>{
                            setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={cod} alt=""/>
                        <p>Cash On Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="confirmPay" onClick={pay}>
                    Confirm and Pay
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
)
}

export default Cart