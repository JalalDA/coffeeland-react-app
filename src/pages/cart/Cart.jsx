import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import hazelnut from '../../assets/img/hazelnut.png'
import bgCart from '../../assets/img/bg-cart.png'
import cardPayment from '../../assets/img/card.png'
import bankPayment from '../../assets/img/dashicons_bank.png'
import cod from '../../assets/img/cod.png'
import './cart.css'

const Cart = (props) => {
    document.title = 'Your Cart'
    console.log(props);
return (
    <>
    <Header/>
    <div className="cartContainer">
        <img src={bgCart} alt="backgroundCart" />
        <span>Checkout Your Item Now!</span>
        <div className="cardCart">
            <div className="leftCart">
                <h3>Order Summary</h3>
                <div className="productListCart">
                    <div className="firstProduct">
                        <img src={hazelnut} alt="" />
                        <div className='productCartDetail'>
                            <p>Hazelnut Late</p>
                            <p>x 1</p>
                            <p>Regular</p>
                        </div>
                        <span>IDR 30000</span>
                    </div>
                    <div className="firstProduct">
                        <img src={hazelnut} alt="" />
                        <div className='productCartDetail'>
                            <p>Hazelnut Late</p>
                            <p>x 1</p>
                            <p>Regular</p>
                        </div>
                        <span>IDR 30000</span>
                    </div>
                </div>
                <div className="lineCart"></div>
                <div className="subTotal">
                    <p>SUBTOTAL</p>
                    <p>IDR 120.000</p>
                </div>
                <div className="subTotal">
                    <p>TAX & FEES</p>
                    <p>IDR 20.000</p>
                </div>
                <div className="subTotal">
                    <p>SHIPPING</p>
                    <p>IDR 10.000</p>
                </div>
                <div className="totalPaymentCart">
                    <p>TOTAL</p>
                    <p>IDR 150.000</p>
                </div>
            </div>
            <div className="rightCart">
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Adress detail</h3>
                    <p>Edit</p>
                    </div>
                    <div className="deliveryCardCart">
                    <p> <b>Delivery</b> to Iskandar Street</p>
                    <div className="lineDeliveryCart"></div>
                    <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                    <div className="lineDeliveryCart"></div>
                    <p>+62 81348287878</p>
                    </div>
                </div>
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="deliveryCardCart">
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                        <img className='imgCardPayment' src={cardPayment} alt=""/>
                        <p>Card</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                        <img className='imgCardPayment' src={bankPayment} alt=""/>
                        <p>Bank Account</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                        <img className='imgCardPayment' src={cod} alt=""/>
                        <p>Cash On Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="confirmPay">
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