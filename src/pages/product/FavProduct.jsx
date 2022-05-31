import React from 'react'
import './product.css'
import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FavProduct = () => {
    const [favProduct, setFavProduct] =  useState([])
    useEffect(()=>{
        const getFavProduct = async ()=>{
            try {
                const result = await axios.get('http://localhost:8000/product/favorit?limit=12')
                console.log(result);
                setFavProduct(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getFavProduct()
    }, [])

return (
    <>
        <Header/>
        <div className="row">
                <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem">Favorit Product</div>
            <div className="headerItem">Coffee</div>
            <div className="headerItem">Non Coffee</div>
            <div className="headerItem">Foods</div>
            <div className="headerItem">Add on</div>
        </div>
        <div className="row favoriteProductProducts">
                {favProduct.map((product)=>
                    <div className="col-md-6  col-lg-3 d-flex flex-column productContainerProducts">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProductProducts" key={product.pictures} 
                            src={`http://localhost:8000${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>
                            <Link className='link' to={`/product/${product.id}`}>{product.name}</Link></div>
                            <div className="priceProducts" key={product.id}>{product.price}</div>
                        </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        <Footer/>
    </>
  )
}

export default FavProduct