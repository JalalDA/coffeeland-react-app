import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./dashboard.css"
import more from "../../assets/img/more.png"
import { useState } from 'react'
import { useSelector } from 'react-redux'

    const Dashboard =()=>{
        const [activeBullet, setActiveBullet] = useState('first')
        const photo = useSelector(state=>state.login.photo)
        console.log(photo);
        return (
            <>
            <Header/>
                <div className='dashboardContainer'>
                    <div className="dashBoardTitle">See how your store progress so far</div>
                    <div className="dashboardBulletTitleContainer">
                        <div className="dashboardInactiveBulletTitleContainer">
                            <div className={activeBullet === 'first' ? 'activeBullet' : 'dashboardActiveBullet'}
                            onClick={()=>{
                                setActiveBullet('first')
                            }}
                            ></div>
                            <div className='dashboardActiveTitle'>Daily</div>
                        </div>
                        <div className="dashboardInactiveBulletTitleContainer">
                            <div className={activeBullet === 'second' ? 'activeBullet' : 'dashboardActiveBullet'}
                            onClick={()=>{
                                setActiveBullet('second')
                            }}></div>
                            <div className="dashboardActiveTitle">Weekly</div>
                        </div>
                        <div className="dashboardInactiveBulletTitleContainer">
                            <div className={activeBullet === 'third' ? 'activeBullet' : 'dashboardActiveBullet'}
                            onClick={()=>{
                                setActiveBullet('third')
                            }}></div>
                            <div className="dashboardActiveTitle">Monthly</div>
                        </div>
                    </div>
                    <div className="dashboardCardContainer">
                        <div className="dashboardCard">
                            <div className="dashboardTitleCard">
                                <div className="dashboardMainTitle">Monthly Report</div>
                                <div className="dashboardMainOption"><img src={more} alt="option" /></div>
                            </div>
                            <div className="dashboardMainSubtitle">Last 7 Days</div>
                            <div className="chartContainer">
                                <div className="chartLeftLabel">
                                    <div className="chartLeftItem">IDR 5M</div>
                                    <div className="chartLeftItem">IDR 3M</div>
                                    <div className="chartLeftItem">IDR 0K</div>
                                    <div className="chartLeftItem">IDR 2M</div>
                                    <div className="chartLeftItem"></div>
                                </div>
                                <div className="mainChart">
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Sunday</div>
                                    </div>
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Monday</div>
                                    </div>
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Tuesday</div>
                                    </div>
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Wednesday</div>
                                    </div>
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Thursday</div>
                                    </div>
                                    <div className="chartColumn">
                                        <div className="chartColumnPositive">
                                            <div className="chartColumnPositiveBar" style={{height:"20%"}}></div>
                                        </div>
                                        <div className="lineChart"></div>
                                        <div className="chartColumnNegative">
                                            <div className="chartColumnNegativeBar" style={{height:"80%"}}></div>
                                        </div>
                                        <div className="chartColumnBottomLabel">Friday</div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboardNoteContainer">
                                <div className="dashboardNote"><div className="dashboardNoteBullet"></div> Income</div>
                                <div className="dashboardNote"><div className="dashboardNoteBulletOut"></div> Outcome</div>
                            </div>
                        </div>
                        <aside className="dashBoardSideContainer">
                            <div className="dashboardSideTop">
                                <div className="dashboardAdminProfile">
                                    <div className="dashboardAdminPictContainer"><img className='dashboardAdminPict' src={`http://localhost:8000${photo}`} alt="admin" /></div>
                                    <div className="dashnoardAdminNameContainer">
                                        <div className="dashboardAdminName">Cheryn Laurent<br />
                                            <span> Keep up the good work and spread love!</span></div>
                                    </div>
                                </div>
                                <div className="dashboardStaffPerform">
                                    <div className="dashboardStaffTitle">Best Staff of the Month</div>
                                    <div className="dashboardStaffDonut">80%</div>
                                    <div className="dashboardStaffNote">Achieved 3.5M of total 478 Customer</div>
                                </div>
                            </div>
                            <div className="dashboardSideBottom">
                                <div className="dashboardGoalsTitle">Goals</div>
                                <div className="dashboardGoalsSubtitle">Your goals is still on 76%. Keep up the good work!</div>
                                <div className="dashboardGoalsDonut">76%</div>
                                <div className="dashboardGoalseMore">
                                    <div className="goalsDotActive"></div>
                                    <div className="goalsDotInactive"></div>
                                    <div className="goalsDotInactive"></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="dashboardButtonContainer">
                        <div className="dashboardDownloadbutton">Download Report</div>
                        <div className="dashboardSharebutton">Share Report</div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    export default Dashboard