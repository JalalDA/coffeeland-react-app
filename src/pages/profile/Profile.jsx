import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import axios from 'axios'
import './profile.css'
import photoprofile from '../../assets/img/nullProfile.png' 
import { Navigate } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteUserInfo} from '../../redux/loginSlice'
import Prompt from '../../components/prompt/Prompt'
import navigate from '../../helpers/Navigate'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            profile: [],
            isLoggedOut : false,
            token : '',
            email : '',
            delivery_adress: '', 
            phone : '',
            display_name : '',
            firstname : '',
            lastname : '',
            gender : '',
            selectedFile : '',
            show : false
        }
    }
    editProfile = async ()=>{
        try { 
        const persist = JSON.parse(localStorage.getItem('persist:persist'))
        const login = JSON.parse(persist.login)
        const token = login.value.token
        const {
            email ,
            delivery_adress,
            phone,
            display_name ,
            firstname,
            lastname,
            gender,
            selectedFile,
        } = this.state
        const body = {
            email,
            phone,
            delivery_adress,
            display_name,
            firstname,
            lastname,
            gender,
            photo : selectedFile
        }

        const config = {
            headers : {
                'Content-type' : 'multipart/form-data',
                Authorization : `Bearer ${token}` 
            }
        }
        const result = await axios.patch('http://localhost:8000/user', body, config)
        console.log(result);
        console.log(result.data.data.photo);
        alert(result.data.msg)
        localStorage.setItem('photo', result.data.data.photo)
        } catch (error) {
            console.log(error);
        }
    }
    logout = async(props)=>{
        try {
            const {doDeleteUser} = props
            const persist = JSON.parse(localStorage.getItem('persist:persist'))
            if(persist){
                const login = JSON.parse(persist.login)
            const token = login.value.token
            const config = {
                headers : {
                    Authorization : `Bearer ${token}` 
                }
            }
            const result = await axios.delete('http://localhost:8000/auth/logout', config)
            console.log(result);
            localStorage.removeItem('persist:persist')
            localStorage.removeItem('photo')
            this.setState({
                isLoggedOut : true
            })
            doDeleteUser()
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidMount() {
        try {
            const persist = JSON.parse(localStorage.getItem('persist:persist'))
            const login = JSON.parse(persist.login)
            const token = login.value.token
            const photo = login.value.photo
            if(photo === "null"){
                this.setState({
                    statephoto : false
                })
            }
            if(!token){
                this.setState({
                    isLoggedOut : true
                })
            }
            const config = {
                headers : {Authorization : `Bearer ${token}`}
            }
            const result = await axios.get(
                'http://localhost:8000/user',
                config
            )
            console.log(result);
            this.setState({
                profile : result.data.data[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        if(this.state.isLoggedOut){
            return <Navigate to={'/'} replace={true}/>
        }
        return (
            <div >
                <Header />
                <Prompt show={this.state.show} onClose={()=>{
                    this.setState({
                        show : false
                    })
                }} yes={this.logout} logout={this.state.isLoggedOut}/>
                {/* <Logout isLoggedOut={()}/>
                 */}
                <div  className="row mainContent">
                    <h2 className="user-profile">User Profile</h2>
                    <div className="d-flex profileContainer">
                        <div className="row profileInfo">
                            <div className="profile">
                                {/* <img src={`http://localhost:8000${this.state.profile.photo}`} alt="" /> */}
                                {this.state.profile.photo ? <img src={`http://localhost:8000${this.state.profile.photo}`} alt="" /> : <img src={photoprofile} alt="" />}
                                <div className="userName">
                                    <h3>{this.state.profile.display_name}</h3>
                                    <p>{this.state.profile.email}</p>
                                </div>
                            </div>
                            <form>
                                <div className="profileButton">
                                    <div className="choosePhoto">
                                        <input type="file" value='' className='inputFile' onChange={e=>{
                                            this.setState({
                                                selectedFile : e.target.files[0]
                                            })
                                        }}/>
                                        Choose photo
                                    </div>
                                    <div className="removePhoto" type="submit">Remove photo</div>
                                    <div className="editPassword" type="submit">Edit Password</div>
                                    <p>Do you want to save the change?</p>
                                    <div className="saveChange" type="submit" 
                                    onClick={this.editProfile}>Save Change</div>
                                    <div className="cancel" type="submit">Cencel</div>
                                    <div className="logout" onClick={()=>{
                                        this.setState({
                                            show : true
                                        })
                                    }}>Logout</div>
                                </div>    
                            </form>
                        </div>
                        <div className="row profileDetail">
                            <div className="col-lg-12 contacts">
                                <h3>Contacts</h3>
                                <form className="row form-contacts">
                                    <div className="col-sm-8 formEmail">
                                        <label htmlFor="email">Email adress :</label>
                                        <input className='inputProfile' type="email" id="email" defaultValue={this.state.profile.email} 
                                        onChannge={(e)=>{
                                            this.setState({
                                            email : e.target.value
                                            })
                                            console.log(this.state.email);
                                        }}/>
                                        <label htmlFor="adres">Delivery adress :</label>
                                        <input className='inputProfile' type="text" id="adress" defaultValue={this.state.profile.delivery_adress} onChange={e=>{
                                            this.setState({
                                                delivery_adress : e.target.value
                                            })
                                        }}/>
                                    </div>
                                    <div className="col-lg-4 col-sm-8 form-phone">
                                        <label htmlFor="phone">Mobile number :</label>
                                        <input className='inputProfile' type="text" id="phone" value={this.state.profile.phone} onChange={e=>{
                                            this.setState({
                                                phone : e.target.value
                                            })
                                        }} />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-12 details">
                                <h3>Details</h3>
                                <form className="row form-details">
                                    <div className="col-sm-8 form-display-first-last">
                                        <label htmlFor="name">Display name :</label>
                                        <input className='inputProfile' type="text" id="name" defaultValue={this.state.profile.display_name} onChange={e=>{
                                            this.setState({
                                                display_name : e.target.value
                                            })
                                        }} />
                                        <label htmlFor="first">First name :</label>
                                        <input className='inputProfile' type="text" id="first" defaultValue={this.state.profile.firstname} onChange={e=>{
                                            this.setState({
                                                firstname : e.target.value
                                            })
                                        }}/>
                                        <label htmlFor="last">Last name :</label>
                                        <input className='inputProfile' type="text" id="last" defaultValue={this.state.profile.lastname} onChange={e=>{
                                            this.setState({
                                                lastname : e.target.value
                                            })
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-sm-8 form-date">
                                        <label htmlFor="date">Birthday</label>
                                        <input className='inputProfile'type="date" id="" defaultValue={this.state.profile.birthday} />
                                    </div>
                                </form>
                            </div>
                            <div className="gender">
                                <label className="radio-container"
                                >Male
                                    <input type="radio" defaultValue='Male'  name="radio" onChange={e=>{
                                        this.setState({
                                            gender : e.target.value
                                        })
                                    }}/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-container"
                                >Female
                                    <input type="radio" defaultValue='Female'  name="radio" onChange={e=>{
                                        this.setState({
                                            gender : e.target.value
                                        })
                                    }} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        doDeleteUser : ()=>{
            dispatch(deleteUserInfo(null))
        }
    }
}

export default connect(mapDispatchToProps) (navigate(Profile))