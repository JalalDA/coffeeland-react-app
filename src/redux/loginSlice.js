import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        value : [],
        photo : '',
        msg : '',
        isSucces : false,
    },
    reducers : {
        pushUserInfo : (state, action)=>{
            return {...state.value, 
                    value : action.payload.data,
                    photo : action.payload.data.photo, 
                    msg : action.payload.msg,
                    isSucces : action.payload.data
                }
        },
        getProfileImg : (state, action)=>{
            return {...state, photo : action.payload}
        },
        deleteUserInfo : ()=>{
            return {
                value : [],
                msg : '',
                isSucces : false,
                photo : false
            }

        }
    }
})

export const getUserInfo = (body)=> async (dispacth)=>{
    try {
        const result = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, body)
        // console.log(result);
        dispacth(pushUserInfo(result.data))
    } catch (error) {
        console.log(error);
        dispacth(pushUserInfo(error.response.data.data.error.error.err))
    }
}

export const {pushUserInfo, getProfileImg, deleteUserInfo} = loginSlice.actions

export default loginSlice.reducer