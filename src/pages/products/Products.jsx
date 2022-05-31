import React, { Component } from 'react'
import './products.css'
import axios from 'axios'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

export default class Products extends Component {
    constructor(){
        super()
        this.state = {
            product : [],
            favorit : false,
            coffee : false,
            nonCoffee : false, 
            foods : false,
            searchName : ''
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
            const result = await axios.get('http://localhost:8000/product/all?page=1&limit=12')
            console.log(result)
            this.setState({
                product : result.data.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidUpdate(){
        try {
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
            if(this.state.favorit){
                const result = await axios.get('http://localhost:8000/product/favorit')
                this.setState({
                    product : result.data.data
                })
                this.setState({
                    favorit : false
                })
            }
            if(this.state.coffee){
                const result = await axios.get('http://localhost:8000/product/?category_id=2')
                this.setState({
                    product : result.data.dataProduct
                })
                this.setState({
                    coffee : false
                })
            }
            if(this.state.nonCoffee){
                const result = await axios.get('http://localhost:8000/product/?category_id=3')
                this.setState({
                    product : result.data.dataProduct
                })
                this.setState({
                    nonCoffee : false
                })
            }
            if(this.state.foods){
                const result = await axios.get('http://localhost:8000/product/?category_id=1')
                console.log(result);
                this.setState({
                    product : result.data.dataProduct
                })
                this.setState({
                    foods : false
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
render() {
    console.log(this.state.searchName);
    return (
        <>
            <Header setSearchName={this.setSearchName.bind(this)}/>
            <div className="row productsContainerFilter">
                <Sidebar/>
            <div className="col-lg-8 content">
            <div className="d-flex justify-content-around productHeader">
            <div className="headerItem" onClick={()=>{
                this.setState({
                    favorit : true
                })
            }}>Favorit Product
            </div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    coffee : true
                })
            }}>Coffee</div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    nonCoffee : true
                })
            }}>Non Coffee</div>
            <div className="headerItem" onClick={()=>{
                this.setState({
                    foods : true
                })
            }}>Foods</div>
            <div className="headerItem">Add on</div>
        </div>
        <div className="row favoriteProductProducts">
                {this.state.product.map((product)=>
                    <div className="col-md-6 col-lg-3 d-flex flex-column productContainerProducts">
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
}
