import React, { useEffect, useState } from 'react'
import './history.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bghistory from '../../assets/img/bg-history.png'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'

const History = () => {
    document.title = "History"
    const [history, setHistory] = useState([])
    const [showCheck, setShowCheck] = useState(false)
    const [idProduct, setIdProduct] = useState('')
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState('')
    const deleteHistory = async()=>{
        try {
            // const persist = JSON.parse(localStorage.getItem('persist:persist'))
            // const login = JSON.parse(persist.login)
            // const token = login.value.token
            // const config = {
            // headers : {
            //     Authorization : `Bearer ${token}`
            // }
            // }
            const body = {
                idProduct : idProduct
            }
            const result = await axios.patch(`${process.env.REACT_APP_SERVER}/history/delete`, body)
            console.log(result);
            setMsg(result.data.msg)
            setShow(true)
        } catch (error) {
            console.log(error);
        }
    }
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
            const result = await axios.get(`${process.env.REACT_APP_SERVER}/history/:id`, config)
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
    <Modal show={show} response={msg} onClose={()=>{
        setShow(false)
    }}/>
    <div className="historyContainer">
        <img className='bgHistory' src={bghistory} alt="" />
        <div className="historyContain">
        <div className="titleHistory">
            <h3>Lets see what you have bought!</h3>
            <p onClick={()=>{
                setShowCheck(true)
            }}>Select item to delete</p>
        </div>
        {showCheck?<div className="deleteHistory" onClick={deleteHistory}>Delete</div> : ''}
        <div className="cardHistoryContain d-flex align-items-center row">
        {history.map(product => 
        <div className="col-lg-4">
            <div className="cardHistory">
                <img className='productImageHistory' src={`${product.product_image}`} alt="" />
                <div className="historyDetail">
                    <h4>{product.product_name}</h4>
                    <p>{product.total_payment}</p>
                    <p>Delivered</p>
                </div>
                
                {showCheck?<input className='checkHistory' type="checkbox" defaultValue={product.id} onClick={e=>setIdProduct(e.target.value)}/> : ''}
                
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