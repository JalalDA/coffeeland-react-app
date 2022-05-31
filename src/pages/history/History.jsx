import React from 'react'
import './history.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bghistory from '../../assets/img/bg-history.png'
import veggie from '../../assets/img/veggie tomato.png'

const History = () => {
    document.title = "History"
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
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardHistory">
                <img src={veggie} alt="" />
                <div className="historyDetail">
                    <h4>Veggie Tomato Mix</h4>
                    <p>IDR 34.000</p>
                    <p>Delivered</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
)
}

export default History