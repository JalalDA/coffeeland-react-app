import React, { Component } from 'react'
import './home.css'
import hero from '../../assets/img/hero.png'
import staff from '../../assets/img/staff.png'
import stores from '../../assets/img/stores.png'
import customer from '../../assets/img/customer.png'
// import checklist from '../../assets/img/checklist.png'
import hazlnut from '../../assets/img/hazelnut.png'
import pinky from '../../assets/img/pinky.png'
import teamWork from '../../assets/img/teamwork.png'
import chickenWings from '../../assets/img/chickenWIngs.png'
import maps from '../../assets/img/maps.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default class Home extends Component {

    render() {
    return (
    <div>
        <Header/>
        <div className="hero">
            <img src={hero} alt=""/>
            <div className="textHero">Start Your Day With <br/>Coffee and Good Meals</div>
            <p>We Provide a high quality beans, good taste, and healthy <br/>meals made by love just for you. Start your day with us <br/>for a bigger smile</p> 
            <div className="getStarted">Get Started</div>
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
            <div className="favoriteProduct">
                <div className="imgProductContainer">
                    <img className="imgProduct" src={hazlnut} alt=""/>
                    <div className="productTittle">Hazelnut Late</div>
                </div>
                <div className="imgProductContainer">
                    <img className="imgProduct" src={pinky} alt=""/>
                    <div className="productTittle">Pinky Promise</div>
                </div>
                <div className="imgProductContainer">
                    <img className="imgProduct" src={chickenWings} alt=""/>
                    <div className="productTittle">Chicken Wings</div>
                </div>
            </div>
            <div className="productInfo">
                <div className="hazelnutLate">
                    <div className="containerProduct">
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Vanila Whiped Cream</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">HazelnutSyrup</div>
                        </div>
                        <div className="price">
                            <div className="priceLabel">IDR 25.000</div>
                            <div className="orderNow">OrderNow</div>
                        </div>
                    </div>
                </div>
                <div className="hazelnutLate">
                    <div className="containerProduct">
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">1 Shot of coffee</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Vanila Whiped Cream</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Chocolate Biscuits</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Strawberry Syrup</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Sliced Strawberry on top</div>
                        </div>
                        <div className="price">
                            <div className="priceLabel">IDR 3.000</div>
                            <div className="orderNow">OrderNow</div>
                        </div>
                    </div>
                </div>
                <div className="hazelnutLate">
                    <div className="containerProduct">
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Wings</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Drum Sticks</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Mayonaise and Lemon</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Hot Fried</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Secret Recipe</div>
                        </div>
                        <div className="checklistmin">
                            <img src="/coffeeland-client/assets/img/ceklistmin.png" alt=""/>
                            <div className="checkText">Buy 1 Get 1 only for dine in</div>
                        </div>
                        <div className="price">
                            <div className="priceLabel">IDR 40.000</div>
                            <div className="orderNow">OrderNow</div>
                        </div>
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
                <img src="/coffeeland-client/assets/img/Netflix.png" alt=""/>
                <img src="/coffeeland-client/assets/img/reddit.png" alt=""/>
                <img src="/coffeeland-client/assets/img/Amazon.png" alt=""/>
                <img src="/coffeeland-client/assets/img/discord.png" alt=""/>
                <img src="/coffeeland-client/assets/img/Sptify.png" alt=""/>
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
                    <img src="/coffeeland-client/assets/img/viezhRobet.png" alt=""/>
                    <div className="rating">
                        <div>4.5</div>
                        <div className="star"><img src="/coffeeland-client/assets/img/star.png" alt="" /></div>
                    </div>
                </div>
                <div className="testiDesc">
                    <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                </div>
            </div>
            <div className="testiListItem">
                <div className="testiName">
                <img src="/coffeeland-client/assets/img/yessika.png" alt=""/>
                <div className="rating">
                    <div>4.5</div>
                    <div className="star"><img src="/coffeeland-client/assets/img/star.png" alt="" /></div>
                </div>
            </div>
            <div className="testiDesc">
                <p>“I like it because i like to travel far and still can make my day better just by drinking their Hazlnut Late</p>
            </div>
        </div>
        <div className="testiListItem">
            <div className="testiName">
            <img src="/coffeeland-client/assets/img/Kim.png" alt=""/>
            <div className="rating">
                <div>4.5</div>
                <div className="star"><img src="/coffeeland-client/assets/img/star.png" alt="" /></div>
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
            <div className="promo">
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
