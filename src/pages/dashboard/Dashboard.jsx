import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import filter from '../../assets/img/filter.png'
import arrowLeft from '../../assets/img/arrow left.png'
import arrowRight from '../../assets/img/arrow right.png'
import './dashboard.css'
import { useState } from 'react'
import {Dummy} from './Data'
import BarChart from '../../components/chart/BarChart'
// import axios from 'axios'


const Dashboard = () => {
    // const [transactions, setTransactions] = useState([])
    // useEffect(()=>{
    //     const getTransactions = async ()=>{
    //         const config = {
    //             headers : {
    //                 Authorization : `Bearer Token`
    //             }
    //         }
    //         const result = await axios.get(`${process.env.REACT_APP_SERVER}/`)
    //     }
    // })
    const [dummyData, setDummyData] = useState({
        labels : Dummy.map(data=>data.year),
        datasets : [{
            label : "USER GAINED",
            data : Dummy.map(data=> data.userGain),
            backgroundColor : ["yellow"],
            borderRadius : 10
        }]
    })
  return (
    <>
    <Header/>
    <BarChart chartData={dummyData} />
    <div className="dashboardContainer">
        <div className="dashboardTitle">See how your store progress so far</div>
        <div className="dashboardTop">
            <div className="filter">
                <img src={filter} alt="filter" />
                <p>Filter</p>
            </div>
            <div className="dashboardDate">
                15 April - 21 April 2022
            </div>
            <div className="dashboardNav">
                <img src={arrowLeft} alt="arrow" />
                <img src={arrowRight} alt="arrow" onClick={()=>{
                    setDummyData({})
                }}/>
            </div>
        </div>
        <div className="dashboardContent">
            <div className="leftContent">
                <div className="leftContenttop">
                <div className="monthly">
                <h3>Monthly Report</h3>
                <p>15 - 20 April 2020</p>
                </div>
                <p>...</p>
                </div>

            </div>
            <div className="rightContent">
                <div className="achieve">Achive</div>
                <div className="target">Target</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard