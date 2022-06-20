import React from 'react'
import Header from '../../components/header/Header'
import Modal from '../../components/Modal/Modal'
import cameraBlank from '../../assets/img/camera-blank.png'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { useSelector } from 'react-redux'


const AddPromo = () => {
const [prevImage, setPrevImage] = useState(false)
const [sizes, setSize] = useState('Regular')
const [deliveryMethod, setDeliveryMethod] = useState('Dine In')
const [discount, setDiscount] = useState('')
const [starttime, setStartTime] = useState('')
const [expiredtime, setExpiredTime] = useState('')
const [code, setCode] = useState('')
const [msg, setMsg] = useState('')
const [show, setShow] = useState(false)
const token = useSelector(state=>state.login.value.token)
const handlePictures = (e)=>{
    let reader = false
    const files = e.target.files[0]
    console.log(files);
    if(files){
    reader = new FileReader()
    reader.onload = (e)=>{
        const result = e.target.result
        setPrevImage(result)
    }
    }        
    reader.readAsDataURL(e.target.files[0])
}

const addPromo = async ()=>{
    try {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
        const body = {
            code,
            starttime,
            expiredtime,
            discount
        }
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/promo`, body, config)
        console.log(result)
        setMsg(result.data.msg)
        setShow(true)
    } catch (error) {
        console.log(error);
    }
}

    return (
    <>
    <Header/>
    <Modal show={show} onClose={()=>{
        setShow(false)
    }}  response = {msg}/>
        <div className="addProductTitle">Add New Promo</div>
        <div className="addProductContainer">
            <div className="leftAddProduct">
                <div className="topLeftAdd">
                <div className="imgProductAdd">
                    {prevImage ? <img className='prevImage' src={prevImage} alt="" />:
                    <img className='cameraBlank' src={cameraBlank} alt="" /> }
                </div>
                <div className="takePictureAdd">Take A Picture</div>
                <div className="choosePictureAdd"
                ><input type="file" onChange={handlePictures}/>
                    Choose From Galery</div>
                </div>
                <div className="deliveryHourAdd">
                    <p>Input Discount</p>
                    <input type="text" onChange={(e)=>{
                        setDiscount(e.target.value)
                    }}/>
                </div>
                <div className="deliveryHourAdd">
                    <p>Expired Date</p>
                    <input type="date" onChange={e=>{
                        setStartTime(e.target.value)
                    }}/>
                    <input type="date" onChange={e=>{
                        setExpiredTime(e.target.value)
                    }} />
                </div>
                <div className="deliveryHourAdd">
                    <p>Input Coupon Code</p>
                    <input type="text" onChange={(e)=>{
                        setCode(e.target.value)
                    }} />
                </div>
            </div>
            <div className="rightAddProduct">
                <form className='addProductForm'>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Input product name' defaultValue='name' 
                    // onChange={e=> setName(e.target.value)}
                    />
                    <label htmlFor="">Normal Price : </label>
                    <input type="text" placeholder='Input price' defaultValue={'price'} 
                    // onChange={e=> setPrice(e.target.value)}
                    />
                    <label htmlFor="">Description : </label>
                    <input type="text" placeholder='input description'
                    defaultValue={'descriptions'} 
                    // onChange={e=> setDescription(e.target.value)}
                    />
                    <label htmlFor="">Input Product Size : </label>
                    <div className="sizeProductAdd">
                        <div className={sizes === 'Regular' ? 'sizeActive' : 'R' } 
                        onClick={()=>{
                            setSize('Regular')
                        }}
                        >R</div>
                        <div className={sizes === 'Large' ? 'sizeActive' : 'L' } onClick={()=>{
                            setSize('Large')
                        }}>L</div>
                        <div className={sizes === 'Extra Large' ? 'sizeActive' : 'XL' } onClick={()=>{
                            setSize('Extra Large')
                        }}>XL</div>
                    </div>
                    <label htmlFor="">Input Delivery Method : </label>
                    <div className="deliveryMethodAdd">
                        <div className={deliveryMethod==='Home Delivery' ? 'selectMethodActive' : "selectMethodAdd"} onClick={()=>{
                            setDeliveryMethod('Home Delivery')
                        }}
                        >Home Delivery</div>
                        <div className={deliveryMethod==='Dine In' ? 'selectMethodActive' : "selectMethodAdd"} onClick={()=>{
                            setDeliveryMethod('Dine In')
                        }}>Dine In</div>
                        <div className={deliveryMethod==='Take Away' ? 'selectMethodActive' : "selectMethodAdd"} onClick={()=>{
                            setDeliveryMethod('Take Away')
                        }}>Take Away</div>
                    </div>
                </form>
                <div className="saveProduct" onClick={addPromo} >Save Promo</div>
                <div className="cancelAddProduct">Cancel</div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default AddPromo