import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
// import pencil from '../../assets/img/pencil.png'
import './editproduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../../components/Modal/Modal'

const EditProduct = () => {
  const [detailProduct, setDetailProduct] = useState({})
  const [name, setName] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [price, setPrice] = useState('')
  const [pictures, setPictures] = useState('')
  const [sizes, setSizes] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [show, setShow] = useState(false)
  const {id} = useParams()
  const [prevImage, setPrevImage] = useState(false)
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
      const result = await axios.patch(`${process.env.REACT_APP_SERVER}/product/${id}`, body, config)
      console.log(result);
      setShow(true)
    } catch (error) {
      console.log(error);      
    }
  }
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
    setPictures(e.target.files[0])
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
    <div className="addProductTitle">Edit Product</div>
        <div className="addProductContainer">
            <div className="leftAddProduct">
                <div className="topLeftAdd">
                <div className="imgProductAdd">
                    {prevImage ? <img className='prevImage' src={prevImage} alt="" />:
                    <img className='prevImage' src={detailProduct.pictures} alt="" /> }
                </div>
                <div className="takePictureAdd">Take A Picture</div>
                <div className="choosePictureAdd"
                ><input type="file" onChange={handlePictures}/>
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
                    <input type="text" defaultValue={detailProduct.name} 
                    onChange={e=> setName(e.target.value)}/>
                    <label htmlFor="">Price : </label>
                    <input type="text" defaultValue={detailProduct.price} 
                    onChange={e=> setPrice(e.target.value)}/>
                    <label htmlFor="">Description : </label>
                    <input type="text" placeholder='input description'
                    defaultValue={detailProduct.descriptions} 
                    onChange={e=> setDescriptions(e.target.value)}
                    />
                    <label htmlFor="">Input Product Size : </label>
                    <div className="sizeProductAdd">
                        <div className={sizes === 'Regular' ? 'sizeActive' : 'R' } 
                            onClick={()=>{
                            setSizes('Regular')
                        }}
                        >R</div>
                        <div className={sizes === 'Large' ? 'sizeActive' : 'L' } 
                        onClick={()=>{
                            setSizes('Large')
                        }}
                        >L</div>
                        <div className={sizes === 'Extra Large' ? 'sizeActive' : 'XL' } 
                        onClick={()=>{
                            setSizes('Extra Large')
                        }}
                        >XL</div>
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
                <div className="saveProduct" onClick={editProduct}>Save Product</div>
                <div className="cancelAddProduct">Cancel</div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default EditProduct