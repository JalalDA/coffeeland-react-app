import React, { Component } from 'react'
import './products.css'
import axios from 'axios'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import left from '../../assets/img/left.png'
import right from '../../assets/img/right.png'
import withParams from '../../helpers/withParam'
import withSearchParams from '../../helpers/withSearchParams'

class Products extends Component {
    constructor(){
        super()
        this.state = {
            product : [],
            favorit : false,
            searchName : '',
            next : false,
            prev : false,
            searchQuery : 'all?page=1&limit=12',
            page : 1,
            category : false,
            all : false,
            categoryActive : false,
        }
    }
    setSearchName = (props)=>{
        this.setState({
            searchName : props
        })
    }


    async componentDidMount(){
        try {
            document.title = "Product"
            const result = await axios.get(`http://localhost:8000/product/${this.state.searchQuery}`)
            console.log(result)
            this.setState({
                product : result.data.data,
                next : result.data.meta.nextPage,
                prev : result.data.meta.previousPage
            })
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidUpdate(){
        try {
            const {searchParams} = this.props
            if(this.state.all){
                const result = await axios.get('http://localhost:8000/product/all?page=1&limit=12')
                console.log(result);
                console.log(this.state.searchName);
                this.setState({
                    product : result.data.data
                })
                this.setState({
                    all : false
                })
            } 
            if(this.state.favorit){
                const result = await axios.get('http://localhost:8000/product/favorit')
                this.setState({
                    product: result.data.data
                })
                this.setState({
                    favorit : false
                })
            }
            if(this.state.category){
                const result = await axios.get(`http://localhost:8000/product/?category_id=${searchParams.get('category_id')}`)
                this.setState({
                    product : result.data.dataProduct
                })
                this.setState({
                    category : false,
                })
            }
            if(this.state.searchName !== ''){
                const result = await axios.get(`http://localhost:8000/product/?name=${this.state.searchName}`)
                console.log(result);
                this.setState({
                    product : result.data.dataProduct
                })
                this.setState({
                    searchName : ''
                })
            }
            // if(this.state.next){
            //     const result = await axios.get(`http://localhost:8000/product/all?page=${this.state.page}`)
            //     console.log(result);
            //     this.setState({
            //         product : result.data.data
            //     })
            //     this.setState({
            //         next : false
            //     })
            // }
           
            // if(this.state.favorit){
            //     const result = await axios.get('http://localhost:8000/product/favorit')
            //     this.setState({
            //         product : result.data.data
            //     })
            //     this.setState({
            //         favorit : false
            //     })
            // }
            // if(this.state.coffee){
            //     const result = await axios.get('http://localhost:8000/product/?category_id=2')
            //     this.setState({
            //         product : result.data.dataProduct
            //     })
            //     this.setState({
            //         coffee : false
            //     })
            // }
            // if(this.state.nonCoffee){
            //     const result = await axios.get('http://localhost:8000/product/?category_id=3')
            //     this.setState({
            //         product : result.data.dataProduct
            //     })
            //     this.setState({
            //         nonCoffee : false
            //     })
            // }
            // if(this.state.foods){
            //     const result = await axios.get('http://localhost:8000/product/?category_id=1')
            //     console.log(result);
            //     this.setState({
            //         product : result.data.dataProduct
            //     })
            //     this.setState({
            //         foods : false
            //     })
            // }
        } catch (error) {
            console.log(error);
        }
    }
render() {
    return (
        <>
            <Header setSearchName={this.setSearchName.bind(this)}/>
            <div className="row productsContainerFilter">
                <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem" onClick={()=>{
                
                this.setState({
                    favorit : true,
                    categoryActive : 'favorit'
                })
            }}> <Link to='?favorit' className={this.state.categoryActive === 'favorit'?'linkCategoryActive' :'linkCategory'} >Favorit Product</Link> 
            </div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    category : true,
                    categoryActive : 'coffee'
                })
            }}> <Link to='?category_id=2' className={this.state.categoryActive === 'coffee'?'linkCategoryActive' :'linkCategory'}>Coffee</Link> 
            </div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    category : true,
                    categoryActive : 'nonCoffee'
                })
            }}><Link to='?category_id=3' className={this.state.categoryActive === 'nonCoffee'?'linkCategoryActive' :'linkCategory'}>Non Coffee</Link></div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    category : true,
                    categoryActive : 'foods'
                })
            }}><Link to='?category_id=1' className={this.state.categoryActive === 'foods'?'linkCategoryActive' :'linkCategory'}>Foods</Link></div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    all : true,
                    categoryActive : 'all'
                })
            }}>
            <Link to='?all' className={this.state.categoryActive === 'all'?'linkCategoryActive' :'linkCategory'}>All</Link> 
            </div>
            </div>
            <div className="row favoriteProductProducts">
                {this.state.product.map((product)=>
                    <div className="col-md-6 col-lg-3 d-flex flex-column productContainerProducts">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProductProducts" key={product.pictures} 
                            src={`http://localhost:8000${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>
                            <Link className='productName' to={`/product/${product.id}`}>{product.name}</Link></div>
                            <div className="priceProducts" key={product.id}>{product.price}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="paginasiProduct">
                <img src={left} alt="leftArrow" onClick={()=>{
                    axios.get(`http://localhost:8000${this.state.prev}`)
                    .then(result =>{
                        this.setState({
                            product : result.data.data,
                            prev : result.data.meta.previousPage,
                            next : result.data.meta.nextPage
                        })
                    }).catch()
                }}/>
                <img src={right} alt="rightArrow" onClick={()=>{
                        if(this.state.next === 'This is the last page'){
                            alert('thist is the last page')
                        }
                    axios.get(`http://localhost:8000${this.state.next}`)
                    .then(result=>{
                        this.setState({
                            product : result.data.data,
                            next : result.data.meta.nextPage,
                            prev : result.data.meta.previousPage
                        })
                    }).catch(err=>{
                        console.log(err);
                    })
                }}/>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}
}

export default withSearchParams(withParams(Products))