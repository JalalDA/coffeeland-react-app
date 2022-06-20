import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import axios from 'axios'
import './profile.css'
import photoprofile from '../../assets/img/nullProfile.png' 
// import { Navigate } from 'react-router-dom'
// import {connect} from 'react-redux'
import {deleteUserInfo, getProfileImg} from '../../redux/loginSlice'
import Prompt from '../../components/prompt/Prompt'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate} from "react-router-dom";
import PromptLogout from '../../components/prompt/PromptLogout'


const Profile = () => {
    const [profile, setProfile] = useState({})
    const [selectedFile, setSelectedFile] = useState('')
    const [email, setEmail] = useState('')
    const [delivery_adress, setDelivery_adress] = useState('')
    const [phone, setPhone] = useState('')
    const [display_name, setDisplay_name] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [show, setShow] = useState(false)
    const [showLogout, setShowLogout] = useState(false) 
    const [prevImage, setPrevImage] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector(state=>state.login.value.token)
    const photo = useSelector(state=>state.login.photo)
    const navigate = useNavigate()

    const logout = async()=>{
        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${token}` 
                }
            }
            const result = await axios.delete(`${process.env.REACT_APP_SERVER}/auth/logout`, config)
            console.log(result);
            localStorage.removeItem('persist:persist')
            localStorage.removeItem('photo')
            dispatch(deleteUserInfo([]))
            navigate('/', {replace:true})
        } catch (error) {
            console.log(error);
        }
    }
    const editProfile = async()=>{
        try {
            const config = {
                headers : {
                    'Content-type' : 'multipart/form-data',
                    Authorization : `Bearer ${token}` 
                }
            }
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
            const result = await axios.patch(`${process.env.REACT_APP_SERVER}/user`, body, config)
            console.log(result);
            dispatch(getProfileImg(result.data.data.photo)) 
            setShow(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const getProfile = async()=>{
            // const persist = JSON.parse(localStorage.getItem('persist:persist'))
            // const login = JSON.parse(persist.login)
            // const token = login.value.token

            const config = {
                headers : {Authorization : `Bearer ${token}`}
            }
            const result = await axios.get(`${process.env.REACT_APP_SERVER}/user/`, config)
            setProfile(result.data.data)
        }
        getProfile()
    }, [token])
    const handlePictures = (e)=>{
        let reader = false
        const files = e.target.files[0]
        console.log(files);
        if(files){
        reader = new FileReader()
        reader.onload = (e)=>{
            const result = e.target.result
            setPrevImage(result)
        }
        }        
        reader.readAsDataURL(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }
  return (
    <>
    <Header/>
        <Prompt show={show} onClose={()=>{
            setShow(false)
        }} yes={editProfile}/>
        <PromptLogout showLogout={showLogout} onClose={()=>setShowLogout(false)} yes={logout}/>
        <div  className="row mainContent">
            <h2 className="user-profile">User Profile</h2>
                <div className="d-flex profileContainer">
                    <div className="row profileInfo">
                        <div className="profile">
                            {prevImage ? <img src={prevImage} alt="profile" /> : <img src={photo ?photo :photoprofile} alt="profile" /> }
                            <div className="userName">
                                <h3>{profile.display_name}</h3>
                                <p>{profile.email}</p>
                        </div>
                    </div>
                    <form>
                        <div className="profileButton">
                            <div className="choosePhoto">
                                <input type="file" value='' className='inputFile' 
                                onChange={handlePictures}
                                />
                                Choose photo
                            </div>
                            <div className="removePhoto" type="submit">Remove photo</div>
                            <div className="editPassword" type="submit">Edit Password</div>
                            <p>Do you want to save the change?</p>
                            <div className="saveChange" type="submit" 
                            onClick={()=>setShow(true)}
                            >Save Change</div>
                            <div className="cancel" type="submit">Cencel</div>
                                <div className="logout"
                                onClick={()=>setShowLogout(true)}
                                >Logout</div>
                                </div>    
                            </form>
                        </div>
                        <div className="row profileDetail">
                            <div className="col-lg-12 contacts">
                                <h3>Contacts</h3>
                                <form className="row form-contacts">
                                    <div className="col-sm-8 formEmail">
                                        <label htmlFor="email">Email adress :</label>
                                        <input className='inputProfile' type="email" id="email" 
                                        defaultValue={'email'} 
                                        onChannge={(e)=>{
                                            setEmail(e.target.value)
                                        }}
                                        />
                                        <label htmlFor="adres">Delivery adress :</label>
                                        <input className='inputProfile' type="text" id="adress" 
                                        defaultValue={profile.delivery_adress} 
                                        onChange={e=>{
                                        setDelivery_adress(e.target.value)
                                        }}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-sm-8 form-phone">
                                        <label htmlFor="phone">Mobile number :</label>
                                        <input className='inputProfile' type="text" id="phone" 
                                        defaultValue={profile.phone} onChange={e=>{
                                            setPhone(e.target.value)
                                        }} 
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-12 details">
                                <h3>Details</h3>
                                <form className="row form-details">
                                    <div className="col-sm-8 form-display-first-last">
                                        <label htmlFor="name">Display name :</label>
                                        <input className='inputProfile' type="text" id="name" 
                                        defaultValue={profile.display_name} 
                                        onChange={e=>{
                                            setDisplay_name(e.target.value)
                                        }} 
                                        />
                                        <label htmlFor="first">First name :</label>
                                        <input className='inputProfile' type="text" id="first" 
                                        defaultValue={profile.firstname} 
                                        onChange={e=>{
                                            setFirstName(e.target.value)
                                        }}
                                        />
                                        <label htmlFor="last">Last name :</label>
                                        <input className='inputProfile' type="text" id="last" 
                                        defaultValue={'profile.lastname'} 
                                        onChange={e=>{
                                            setLastName(e.target.value)
                                        }} 
                                        />
                                    </div>
                                    <div className="col-lg-4 col-sm-8 form-date">
                                        <label htmlFor="date">Birthday</label>
                                        <input className='inputProfile'type="date" id="" 
                                        defaultValue={profile.birthday} 
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="gender">
                                <label className="radio-container"
                                >Male
                                    <input type="radio" defaultValue='Male'  name="radio" 
                                    onChange={e=>{
                                        setGender('Male')
                                    }}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-container"
                                >Female
                                    <input type="radio" 
                                    defaultValue='Female'  name="radio" onChange={e=>{
                                        setGender(e.target.value)
                                    }} 
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
        </div>
    <Footer/>
    </>
  )
}

export default Profile