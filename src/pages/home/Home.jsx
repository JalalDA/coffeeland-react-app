import React, { Component } from 'react'
import './home.css'
import hero from '../../assets/img/hero.png'
import staff from '../../assets/img/staff.png'
import stores from '../../assets/img/stores.png'
import customer from '../../assets/img/customer.png'
import checklist from '../../assets/img/checklist.png'
import hazlnut from '../../assets/img/hazelnut.png'
import teamWork from '../../assets/img/teamwork.png'
import maps from '../../assets/img/maps.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import netflix from '../../assets/img/Netflix.png'
import spotify from '../../assets/img/Sptify.png'
import amazon from '../../assets/img/Amazon.png'
import reddit from '../../assets/img/reddit.png'
import discord from '../../assets/img/discord.png'
import viez from '../../assets/img/viezhRobet.png'
import yessika from '../../assets/img/yessika.png'
import kim from '../../assets/img/Kim.png'
import star from '../../assets/img/star.png'
import Modal from '../../components/Modal/Modal'


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            setShowButton : props,
            show : false
        }
    }
    render() {
    return (
    <div>
        <Modal show={this.state.show} onClose = {()=>{
            this.setState({
                show : false
            })
        }}/>
        <Header/>
        <div className="hero">
            <img src={hero} alt=""/>
            <div className="textHero">Start Your Day With <br/>Coffee and Good Meals</div>
            <p>We Provide a high quality beans, good taste, and healthy <br/>meals made by love just for you. Start your day with us <br/>for a bigger smile</p> 
            <div className="getStarted"  onClick={()=>{
                this.setState({
                    show : true
                })
            }}>Get Started</div>
        </div>
        <div className="infoStore">
            <div className="staff">
                <div className="imgStaff">
                    <img src={staff} alt=""/>
                </div>
                <div className="textStaff">
                    <div className="angka">90+</div>
                    <p>Staff</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="staff">
                <div className="imgStaff">
                    <img src={stores} alt=""/>
                </div>
                <div className="textStaff">
                    <div className="angka">30+</div>
                    <p>Stores</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="staff">
                <div className="imgStaff">
                    <img src={customer} alt=""/>
                </div>
                <div className="textStaff">
                    <div className="angka">800+</div>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="teamWork">
            <img className="teamWorkImg" src={teamWork} alt=""/>
            <div className="teamWorkText">
                <div className="quotes">We Provide Good Coffee<br/> and A Healthy Meals</div>
                <div className="textQuotes">You can explore the menu that we provide with fun and <br/>have their own taste adn make your day better
                </div> 
                <div className="checklist">
                    <img src="/coffeeland-client/assets/img/checklist.png" alt=""/>
                    <div className="checklistText">High quality beans </div>
                </div>
                <div className="checklist">
                <img src="/coffeeland-client/assets/img/checklist.png" alt=""/>
                <div className="checklistText">Healthy meals, you can request the ingredients </div>
                </div>
                <div className="checklist">
                    <img src="/coffeeland-client/assets/img/checklist.png" alt=""/>
                    <div className="checklistText">Chat with our staff to get better experience for ordering</div>
                </div>
                <div className="checklist">
                    <img src="/coffeeland-client/assets/img/checklist.png" alt=""/>
                    <div className="checklistText">Free member card with a minimum purchase of IDR 200.000 </div>
                </div>
            </div>
        </div>
        <div className="favorite">
            <div className="favoriteTitle">
                <p>Here is People's Favorite</p>
            </div>
            <div className="desc">
                <p>Let's choose and have a bit tasteof people's favorite. it might be yours tool</p>
            </div>
            <div className="productInfo">
                <div className="containerProduct">
                <img className='imgProductHome' src={hazlnut} alt="" />
                    <div className="checklistSpace">
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">Vanila Whiped Cream</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                    </div>
                    <div className="price">
                            <div className="priceLabel">IDR 25.000</div>
                            <div className="orderNow">OrderNow</div>
                    </div>
                </div>
                <div className="containerProduct">
                <img className='imgProductHome' src={hazlnut} alt="" />
                    <div className="checklistSpace">
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">Vanila Whiped Cream</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                    </div>
                    <div className="price">
                            <div className="priceLabel">IDR 25.000</div>
                            <div className="orderNow">OrderNow</div>
                    </div>
                </div>
                <div className="containerProduct">
                <img className='imgProductHome' src={hazlnut} alt="" />
                    <div className="checklistSpace">
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">Vanila Whiped Cream</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src={checklist} alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                    </div>
                    <div className="price">
                            <div className="priceLabel">IDR 25.000</div>
                            <div className="orderNow">OrderNow</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="maps">
            <h3>Visits our store in the</h3>
            <h3>spot on the map bellow</h3>
            <p>See Our Store in every city on the spot and spend your good day there. See </p>
            <p>you soon!</p>
            <img src={maps} alt=""/>
        </div>
        <div className="partner">
            <h3>Our Partner</h3>
            <div className="imgList">
                <img src={netflix} alt=""/>
                <img src={reddit} alt=""/>
                <img src={amazon} alt=""/>
                <img src={discord} alt=""/>
                <img src={spotify} alt=""/>
            </div>
        </div>
        <div className="testiContainer">
            <div className="testiTitle">
            <h2>Loved by Thousands of</h2>
            <h2> Happy Customer</h2>
            <p>These are the stories of our customers who have visited us with great</p>
            <p>pleasure.</p>
            </div>
            <div className="testiList">
            <div className="testiListItem">
                <div className="testiName">
                    <img src={viez} alt=""/>
                    <div className="rating">
                        <div>4.5</div>
                        <div className="star"><img src={star} alt="star" /></div>
                    </div>
                </div>
                <div className="testiDesc">
                    <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                </div>
            </div>
            <div className="testiListItem">
                <div className="testiName">
                <img src={yessika} alt=""/>
                <div className="rating">
                    <div>4.5</div>
                    <div className="star"><img src={star} alt="" /></div>
                </div>
            </div>
            <div className="testiDesc">
                <p>“I like it because i like to travel far and still can make my day better just by drinking their Hazlnut Late</p>
            </div>
        </div>
        <div className="testiListItem">
            <div className="testiName">
            <img src={kim} alt=""/>
            <div className="rating">
                <div>4.5</div>
                <div className="star"><img src={star} alt="" /></div>
            </div>
        </div>
        <div className="testiDesc">
            <p>“This is very unusual for my taste, I haven't liked coffee berfore, but their cofffee is the best! and yup, you have to order the chicke wings, the best in town!</p>
        </div>
    </div>
    </div>    
        </div>
        <div className="paginasi">
            <div className="slide">
                <img src="/coffeeland-client/assets/img/union.png" alt=""/>
            </div>
            <div className="button">
                <img className="btn-img" src="/coffeeland-client/assets/img/left.png" alt=""/>
                <img className="btn-right" src="/coffeeland-client/assets/img/right.png" alt=""/>
            </div>
        </div>
        <div className="promoContainer">
            <div className="promoHome">
                <div className="promotext">
                    <h2>Check Our Promo</h2>
                    <h2>Today</h2>
                    <p>Let's see the deals and pick yours</p>
                </div>
                <div className="btn-promo">See Promo</div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}
}
