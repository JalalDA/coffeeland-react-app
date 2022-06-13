import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bgCart from '../../assets/img/bg-cart.png'
import cardPayment from '../../assets/img/card.png'
import bankPayment from '../../assets/img/dashicons_bank.png'
import cod from '../../assets/img/cod.png'

const Orders = () => {
    return (
    <>
    <Header/>
    <div className="cartContainer">
        <img src={bgCart} alt="backgroundCart" />
        <span>Finish Your <br/> Customer Order Now!</span>
        <div className="cardCart">
            <div className="leftCart">
                <h3>Delivery Order</h3>
                <p>For Zulaikha</p>
                <div className="productListCart">
                    <div className="firstProduct">
                        <img src={cod} alt="" />
                        <div className='productCartDetail'>
                            <p>ProductName</p>
                            <p>X 1</p>
                            <p>Regular</p>
                        </div>
                        <span>IDR 20.000</span>
                    </div>
                </div>
                <div className="lineCart"></div>
                <div className="subTotal">
                    <p>SUBTOTAL</p>
                    <p>100.000</p>
                </div>
                <div className="subTotal">
                    <p>TAX & FEES</p>
                    <p>20000</p>
                </div>
                <div className="subTotal">
                    <p>SHIPPING</p>
                    <p>2000</p>
                </div>
                <div className="totalPaymentCart">
                    <p>TOTAL</p>
                    <p>80000</p>
                </div>
            </div>
            <div className="slideCart">Slide to see upcoming orders</div>
            <div className="rightCart">
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Adress detail</h3>
                    <p>Edit</p>
                    </div>
                    <div className="deliveryCardCart">
                    <p> <b>Delivery to </b>Here</p>
                    <div className="lineDeliveryCart"></div>
                    <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                    <div className="lineDeliveryCart"></div>
                    <p>0812345</p>
                    </div>
                </div>
                <div className="firstCardRightCart">
                    <div className="adressCart">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="deliveryCardCart">
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Card Payment' onChange={(e)=>{
                            // setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={cardPayment} alt=""/>
                        <p>Card</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Bank Payment' onChange={(e)=>{
                            // setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={bankPayment} alt=""/>
                        <p>Bank Account</p>
                        </div>
                        <div className="radioCart">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value='Cash On Delivery' onChange={(e)=>{
                            // setPaymentMethod(e.target.value)
                        }}/>
                        <img className='imgCardPayment' src={cod} alt=""/>
                        <p>Cash On Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="confirmPay" >
                    Confirm and Pay
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Orders