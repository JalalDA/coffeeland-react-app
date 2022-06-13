import React, { useEffect, useState } from 'react'
import './history.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bghistory from '../../assets/img/bg-history.png'
import axios from 'axios'

const History = () => {
    document.title = "History"
    const [history, setHistory] = useState([])
    useEffect(()=>{
        const persist = JSON.parse(localStorage.getItem('persist:persist'))
        const login = JSON.parse(persist.login)
        const token = login.value.token
        const config = {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
        const getHistory = async ()=>{
            try {
            const result = await axios.get('http://localhost:8000/history/:id', config)
            console.log(result);
            setHistory(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getHistory()
    }, [])
return (
    <>
    <Header/>
    <div className="historyContainer">

        <img className='bgHistory' src={bghistory} alt="" />
        <div className="historyContain">
        <div className="titleHistory">
            <h3>Lets see what you have bought!</h3>
            <p>Select item to delete</p>
        </div>
        <div className="cardHistoryContain d-flex align-items-center row">
        {history.map(product => 
        <div className="col-lg-4">
            <div className="cardHistory">
                <img className='productImageHistory' src={`http://localhost:8000${product.product_image}`} alt="" />
                <div className="historyDetail">
                    <h4>{product.product_name}</h4>
                    <p>{product.total_payment}</p>
                    <p>Delivered</p>
                </div>
            </div>
        </div>)}
        </div>
        </div>
    </div>
    <Footer/>
    </>
)
}

export default History