import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link} from 'react-router-dom'

const Productdua = () => {
    const [product, setProduct] = useState([])
    const [url, setUrl] = useState('all')
    const [query, setQuery] = useState(false)
    useEffect(()=>{
        const getProduct = async()=>{
            try {
                const result = await axios.get(`http://localhost:8000/product/${url}`)
                console.log(url);
                setProduct(result.data.data)
            } catch (err) {
                console.log(err);
            }
        }
        getProduct()
        if(query){
            const getQuery = async()=>{
                const result = await axios.get(`http://localhost:8000/product/${url}`)
                setProduct(result.data.data)
            }
            getQuery()
        }
    }, [])
return (
    <>
    <Header/>
    <div className="row">
                <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem" onClick={()=>{
                setUrl('favorit')
                axios.get('http://localhost:8000/product/favorit').then(result=>{
                    setProduct(result.data.data)
                }).catch(err=>err)
            }}>Favorit Product</div>
            <div className="headerItem" onClick={()=>{
                setQuery(true)
                setUrl(`?category_id=2`)
            }}>Coffee</div>
            <div className="headerItem">Non Coffee</div>
            <div className="headerItem">Foods</div>
            <div className="headerItem">Add on</div>
        </div>
        <div className="row favoriteProductProducts">
                {product.map((product)=>
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

export default Productdua