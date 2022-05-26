import React, { Component } from 'react'
import './products.css'
import axios from 'axios'

export default class Products extends Component {
    constructor(){
        super()
        this.state = {
            product : [],
        }
    }
    async componentDidMount(){
        try {
            const result = await axios.get(
                'http://localhost:8000/product/all?limit=12'
            )
            console.log(result.data.data)
            this.setState({
                product : result.data.data
            })
        } catch (error) {
            console.log(error);
        }
    }
render() {
    return (
        <div className="col-lg-8 content">
        <div className="d-flex justify-content-around productHeader">
            <div className="headerItem">Favorit Product</div>
            <div className="headerItem">Coffee</div>
            <div className="headerItem">Non Coffee</div>
            <div className="headerItem">Foods</div>
            <div className="headerItem">Add on</div>
        </div>
        <div className="row favoriteProduct">
                {this.state.product.map((product)=>
                    <div className="col-md-6  col-lg-3 d-flex flex-column productContainer">
                        <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                            <img className="imgProduct" key={product.pictures} 
                            src={`http://localhost:8000${product.pictures}`} alt=""/>
                            <div className="productName" key={product.name}>{product.name}</div>
                            <div className="price" key={product.id}>{product.price}</div>
                        </div>
                    </div>    
                )}
        </div>
    </div>
    )
  }
}
