import React, { Component } from 'react'
import './profile.css'

export default class Profile extends Component {
render() {
    return (
    <div>
        <div className="row mainContent">
            <h2 className="user-profile">User Profile</h2>
            <div className="d-flex profileContainer">
                    <div className="row profileInfo">
                        <div className="profile">
                            <img src="/assets/img/profile2.png" alt=""/>
                            <div className="userName">
                                <h3>Zulaikha</h3>
                                <p>zulaikha17@gmail.com</p>
                            </div>
                        </div>
                        <form>
                            <div className="profileButton">
                            <div className="choosePhoto" type="submit">Choose photo</div>
                            <div className="removePhoto" type="submit">Remove photo</div>
                            <div className="editPassword" type="submit">Edit Password</div>
                            <p>Do you want to save the change?</p>
                            <div className="saveChange" type="submit">Save Change</div>
                            <div className="cancel" type="submit">Cencel</div>
                            <div className="logout" type="submit">Log out</div>
                            </div>
                        </form>
                    </div>
                    <div className="row profileDetail">
                        <div className="col-lg-12 contacts">
                            <h3>Contacts</h3>
                            <form className="row form-contacts">
                                <div className="col-sm-8 formEmail">
                                <label for="email">Email adress :</label>
                                <input type="email" id="email" placeholder="zulaikhha17@gmail.com"/>
                                <label for="adres">Delivery adress :</label>
                                <input type="text" id="adress" placeholder="Iskandar Street No. 67 Block A Near Bus Stop" />
                                </div>
                                <div className="col-sm-4 form-phone">
                                <label for="phone">Mobile number :</label>
                                <input type="text" id="phone" placeholder="(+62)813123456782" />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-12 details">
                            <h3>Details</h3>
                            <form className="row form-details">
                                <div className="col-sm-8 form-display-first-last">
                                <label for="name">Display name :</label>
                                <input type="text" id="name" placeholder="Zulaikha" />
                                <label for="first">First name :</label>
                                <input type="text" id="first" placeholder="Zulaikha" />
                                <label for="last">Last name :</label>
                                <input type="text" id="last" placeholder="Nirmala" />
                                </div>
                                <div className="col-sm-4 form-date">
                                <label for="date">DD/MM/YY</label>
                                <input type="date" id="" placeholder="03/04/90" />
                                </div>
                            </form>
                        </div>
                        <div className="gender">
                            <label className="radio-container"
                                >Male
                                <input type="radio" checked="checked" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-container"
                                >Female
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}
}
