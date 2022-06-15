import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import pencil from '../../assets/img/pencil.png'
import './editproduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../../components/Modal/Modal'

const EditProduct = () => {
  const [count, setCount] = useState(1)
  const [detailProduct, setDetailProduct] = useState({})
  const [name, setName] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [price, setPrice] = useState('')
  const [pictures, setPictures] = useState('')
  const [sizes, setSizes] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [show, setShow] = useState(false)
  const {id} = useParams()
  console.log(id);
  const token = useSelector(state=>state.login.value.token)
  
  const editProduct = async ()=>{
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
      const result = await axios.patch(`http://localhost:8000/product/${id}`, body, config)
      console.log(result);
      setShow(true)
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
    <Modal show={show} onClose={()=>{
      setShow(false)
    }} response='Succes update product'/>
    <div className="editProductTitle">Edit Product</div>
    <div className="editProductContainer">
        <div className="editProductLeft">
          <div className="imgPencil">
            <input type="file" onChange={e=>{
              setPictures(e.target.files[0])
            }}/>
            <img src={pencil} alt=""/>
          </div>
          <img className='editProductImg' src={`${process.env.REACT_APP_SERVER}/${detailProduct.pictures}`} alt="" />
          <span>Delivery only on <b>Monday to Friday</b> at <b>1 - 7 PM</b> </span>
        </div>
        <div className="editProductRight">
          <input type="text" defaultValue={detailProduct.name} className='productNameEdit'
          onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <input type="text" defaultValue={detailProduct.price} className='productNamePrice'
          onChange={e=>{
            setPrice(e.target.value)
          }}/>
          <input type='text' defaultValue={detailProduct.descriptions} className='productNameDesc'
          onChange={(e)=>{
            setDescriptions(e.target.value)
          }}/>
          <select className='selectEditProduct' name="" id="" 
          onChange={e=>setSizes(e.target.value)}>
          <option value="">Select Size</option>
          <option value="">Regular</option>
          <option value="">Large</option>
          <option value="">Extra Large</option>
          </select>
          <select className='selectEditProduct' name="" id=""
          onChange={e=>setDeliveryMethod(e.target.value)}>
          <option value="">Select Delivery Mehtod</option>
          <option value="">Home Delivery</option>
          <option value="">Dine In</option>
          <option value="">Take Away</option>
          </select>
          <div className="addToCartContanerEdit">
          <div className="countEdit">
            <div className="countButton">
              <div className="minus" onClick={()=>{
                setCount(count - 1 )
                if(count === 1){
                  setCount(1)
                }
              }}> - </div>
              <div className="lineButton"></div>
              <div className="numb"> {count} </div>
              <div className="lineButton"></div>
              <div className="plus" onClick={()=>{
                setCount(count + 1)
              }}> + </div>
            </div>
          </div>
          <div className="addToCartEdit">Add To Cart</div>
          </div>
          <div className="saveChange" 
          onClick={editProduct}>
            Save Change
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EditProduct