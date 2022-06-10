import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import left from '../../assets/img/left.png'
import right from '../../assets/img/right.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import filter from '../../assets/img/filter.png'
import {getAllProduct} from '../../redux/reducers/productSlice'
import './products.css'

const Products = () => {
    // this.state = {
    //     product : [],
    //     favorit : false,
    //     searchName : '',
    //     next : false,
    //     prev : false,
    //     searchQuery : 'all?page=1&limit=12',
    //     page : 1,
    //     category : false,
    //     all : false,
    //     categoryActive : false,
    //     sort : false
    // }
    const product = useSelector((state)=>state.product.value)
    const discpatch = useDispatch()
    const [categoryActive, setCategoryActive] = useState(false)
    const [params, setParams] = useState('all?page=1&limit=12')
    useEffect(()=>{
        discpatch(getAllProduct(params))
    }, [params])
    console.log(product);
    console.log(params);
return (
    <>
    <Header/>
            <div className="row productsContainerFilter">
            <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem" > 
            <Link to='?favorit' className={categoryActive === 'favorit'?'linkCategoryActive' :'linkCategory'} 
            onClick={()=>{
                setParams('favorit')
                setCategoryActive('favorit')
            }}>Favorit Product</Link> 
            </div>
            <div className="headerItem"> 
            <Link to='?category=coffee' className={categoryActive === 'coffee'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams('?category_id=2')
                setCategoryActive('coffee')
            }}
            >Coffee
            </Link> 
            </div>
            <div className="headerItem">
            <Link to='?category=noncoffee' className={categoryActive === 'nonCoffee'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams('?category_id=3')
                setCategoryActive('nonCoffee')
            }}
            >Non Coffee
            </Link>
            </div>
            <div className="headerItem"><Link to='?category=foods' className={categoryActive === 'foods'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams(`?category_id=1`)
                setCategoryActive('foods')
            }}
            >Foods</Link></div>
            <div className="headerItem">
            <Link to='?all' className={categoryActive === 'all'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams(`all?page=1&limit=12`)
                setCategoryActive('all')
            }}
            >All</Link> 
            </div>
            </div>
            <div className="row favoriteProductProducts">
            <div className="productFilter col-lg-12">
                <img src={filter} alt="" />
                <select onChange={(e)=>{
                    if(e.target.value === 'price'){
                        setParams(params=>params+='&sort=price&order=desc')
                        console.log(params);
                    }
                }}
                > <option value="">Filter</option>
                    <option value='price'
                    >Price</option>
                    <option value="latest">Latest</option>
                </select>
            </div>
                {product.map((product)=>
                    <div className="col-md-6 col-lg-3 d-flex flex-column productContainerProducts">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProductProducts" key={product.pictures} 
                            src={`http://localhost:8000${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>
                            <Link className='productName' to={`/producttest/${product.id}`}>{product.name}</Link></div>
                            <div className="priceProducts" key={product.id}>{product.price}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="paginasiProduct">
                <img src={left} alt="leftArrow" />
                <img src={right} alt="rightArrow"/>
            </div>
            </div>
            </div>
            <Footer/>
    </>
)
}

export default Products