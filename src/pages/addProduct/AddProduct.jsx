import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import cameraBlank from '../../assets/img/camera-blank.png'
import axios from 'axios'
import './addProduct.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [descriptions, setDescription] = useState('')
    const [sizes, setSize] = useState('')
    const [deliveryMethod, setDeliveryMethod] = useState('')
    const [pictures, setPictures] = useState('')
    const token = useSelector(state=>state.login.value.token)

    const addProduct = async ()=>{
        try {
            const body = {
                name,
                descriptions,
                price,
                pictures,
                sizes,
                delivery_method : deliveryMethod,
            }
            const config = {
                headers : {
                    'Content-type' : 'multipart/form-data',
                    Authorization : `Bearer ${token}`
                }
            }
            const result = await axios.post(`${process.env.REACT_APP_SERVER}/product/`, body, config)
            console.log(result);
            alert('Succes Add Product')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <Header/>
        <div className="addProductTitle">Add New Product</div>
        <div className="addProductContainer">
            <div className="leftAddProduct">
                <div className="topLeftAdd">
                <div className="imgProductAdd">
                    <img src={cameraBlank} alt="" />
                </div>
                <div className="takePictureAdd">Take A Picture</div>
                <div className="choosePictureAdd"
                ><input type="file" onChange={(e)=>{
                    setPictures(e.target.files[0])
                }}/>
                    Choose From Galery</div>
                </div>
                <div className="deliveryHourAdd">
                    <p>Delivery Hour</p>
                    <input type="time" />
                    <input type="time" />
                </div>
                <div className="deliveryHourAdd">
                    <p>Input Stock</p>
                    <input type="text" />
                </div>
            </div>
            <div className="rightAddProduct">
                <form className='addProductForm'>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Input product name' defaultValue={name} 
                    onChange={e=> setName(e.target.value)}/>
                    <label htmlFor="">Price : </label>
                    <input type="text" placeholder='Input price' defaultValue={price} 
                    onChange={e=> setPrice(e.target.value)}/>
                    <label htmlFor="">Description : </label>
                    <input type="text" placeholder='input description'
                    defaultValue={descriptions} 
                    onChange={e=> setDescription(e.target.value)}/>
                    <label htmlFor="">Input Product Size : </label>
                    <div className="sizeProductAdd">
                        <div className="R" onClick={()=>{
                            setSize('Regular')
                        }}>R</div>
                        <div className="L" onClick={()=>{
                            setSize('Large')
                        }}>L</div>
                        <div className="XL" onClick={()=>{
                            setSize('Extra Large')
                        }}>XL</div>
                    </div>
                    <label htmlFor="">Input Delivery Method : </label>
                    <div className="deliveryMethodAdd">
                        <div className="selectMethodAdd" onClick={()=>{
                            setDeliveryMethod('Home Delivery')
                        }}
                        >Home Delivery</div>
                        <div className="selectMethodAdd" onClick={()=>{
                            setDeliveryMethod('Dine In')
                        }}>Dine In</div>
                        <div className="selectMethodAdd" onClick={()=>{
                            setDeliveryMethod('Take Away')
                        }}>Take Away</div>
                    </div>
                </form>
                <div className="saveProduct" onClick={addProduct}>Save Product</div>
                <div className="cancelAddProduct">Cancel</div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default AddProduct