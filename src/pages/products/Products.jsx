import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import left from '../../assets/img/left.png'
import right from '../../assets/img/right.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import filter from '../../assets/img/filter.png'
import {getAllProduct} from '../../redux/slice/productSlice'
import pen from '../../assets/img/pencil.png'
import './products.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

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
    const navigate = useNavigate()
    const product = useSelector((state)=>state.product.data)
    const meta = useSelector(state=>state.product.meta)
    const role = useSelector(state=> state.login.value.role)
    const discpatch = useDispatch()
    const [categoryActive, setCategoryActive] = useState(false)
    const [params, setParams] = useState('/')
    const [searchName, setSearchName] = useState('')
    let [searchParams, setSearchParams] = useSearchParams()
    const currencyFormatter =  new Intl.NumberFormat("IDR", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    })

    useEffect(()=>{
        discpatch(getAllProduct(params))
        if(searchName !== ''){
            setParams(`/?name=${searchName}`)
        }
    }, [params, discpatch, searchName])

    const getSearchName = (props)=>{
        setSearchName(props)
    }
return (
    <>
    <Header setSearchName = {getSearchName}/>
            <div className="row productsContainerFilter">
            <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem" > 
            <Link to='?favorit' className={categoryActive === 'favorit'?'linkCategoryActive' :'linkCategory'} 
            onClick={()=>{
                setParams('/favorit')
                setCategoryActive('favorit')
            }}>Favorit Product</Link> 
            </div>
            <div className="headerItem"> 
            <Link to='?category=coffee' className={categoryActive === 'coffee'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams('/?category_id=2')
                setCategoryActive('coffee')
            }}
            >Coffee
            </Link> 
            </div>
            <div className="headerItem">
            <div className={categoryActive === 'nonCoffee'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                if(searchName !== ''){
                    setSearchParams(`?name=${searchName}&category=noncoffee`)
                    setParams(`?name=${searchName}&category_id=3`)
                }
                setSearchParams('?category=noncoffee')
                setParams('/?category_id=3')
                setCategoryActive('nonCoffee')
            }}
            >Non Coffee
            </div>
            </div>
            <div className="headerItem"><Link to='?category=foods' className={categoryActive === 'foods'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams(`/?category_id=1`)
                setCategoryActive('foods')
            }}
            >Foods</Link></div>
            <div className="headerItem">
            <Link to='?all' className={categoryActive === 'all'?'linkCategoryActive' :'linkCategory'}
            onClick={()=>{
                setParams(`/`)
                setCategoryActive('all')
            }}
            >All</Link> 
            </div>
            </div>
            <div className="row favoriteProductProducts">
            <div className="productFilter col-lg-12">
                <select onChange={(e)=>{
                    if(e.target.value === 'price' && (params === '/')) {
                        setParams(params=>params+='?&sort=price')
                        setSearchParams(`?all&sort=price`)
                    }
                    if(e.target.value === 'price' && params==='/favorit'){
                        setParams(params=>params+='?&sort=price')
                        setSearchParams(`?category=favorit&sort=price`)
                    }
                    if(e.target.value === 'price'){
                        setParams(params=>params+='&sort=price')
                        let params = searchParams.get('category')
                        console.log(params);
                        setSearchParams(`category=${params+='?&sort=price'}`)
                    }
                }}
                > <option value="">Order</option>
                    <option value='price'
                    >Price</option>
                </select>
                <select onChange={(e)=>{
                    if(e.target.value === 'asc'){
                        setParams(params=>params+='&order=asc')
                    }
                    // if(e.target.value === 'desc'){
                    //     setParams(params=> params+='&order=desc')
                    // }
                }}> <option >Sort</option>
                    <option value="asc">Cheapest</option>
                </select>
                <img src={filter} alt="" />
            </div>
                {role === 'admin'?
                <>
                    {product.map((product)=>
                    <div className="col-md-6 col-lg-3 d-flex flex-column productContainerProducts">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProductProducts" key={product.pictures} 
                            src={`${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>
                            <Link className='productName' to={`/product/${product.id}`}>{product.name}</Link></div>
                            <div className="priceProducts" key={product.id}>{currencyFormatter.format(product.price)}</div>
                            <div className="pencil">
                            <Link to={`/editproduct/${product.id}`}>
                                <img src={pen} alt="pen" />
                            </Link>
                            </div>
                        </div>
                    </div>
                )}

                </> : <>
                {product.map((product)=>
                    <div className="col-md-6 col-lg-3 d-flex flex-column productContainerProducts">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProductProducts" key={product.pictures} 
                            src={`${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>
                            <Link className='productName' to={`/product/${product.id}`}>{product.name}</Link></div>
                            <div className="priceProducts" key={product.id}>{currencyFormatter.format(product.price)}</div>
                        </div>
                    </div>
                )}

                </>}
            </div>
            {role === 'admin' ? <div className="addProduct" onClick={()=>{
                navigate('/addproduct')
                window.scroll(0,0)
            }}>ADD NEW PRODUCT</div> : ''}
            <div className="paginasiProduct">
                <img src={left} alt="leftArrow" onClick={()=>{
                    setParams(params=> params=`?page=${meta.curentPage-1}`)
                    window.scroll(0,0)
                    navigate('?page=1')
                }}/>
                <div className="pageNumber">
                    <div className={searchParams.get('page')=== '1' ? 'numberPageActive' : 'numberPage'}>1</div>
                    <div className={searchParams.get('page')=== '2' ? 'numberPageActive' : 'numberPage'}>2</div>
                </div>
                <img src={right} alt="rightArrow" onClick={()=>{
                    setParams(params=> params=`?page=${meta.curentPage + 1}`)
                    window.scroll(0,0)
                    navigate('?page=2')
                }}/>
            </div>
            </div>
            </div>
            <Footer/>
    </>
)
}

export default Products