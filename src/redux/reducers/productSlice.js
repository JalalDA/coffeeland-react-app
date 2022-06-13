import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const productSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        search : '',
        meta  : ''
    },
    reducers : {
        pushProduct : (state, action)=>{
            return {...state, data :action.payload.data, meta : action.payload.meta}
            // switch (action.type) {
            //     case 'PRODUCT_REQUEST':
            //     return {loading : 'Loading ...'}
            //     case 'PRODUCT_SUCCES' : 
            //     return {...state.value, value : action.payload }
            //     case 'PRODUCT_FAILED' : 
            //     return {...state.value, value : action.payload}
            //     default:
            //         return state
            // }
        },
        setSearch : (state, action)=>{
            return {...state.search, search : action.payload}
        }
    }
})

export const getAllProduct = (params)=> async (dispatch)=> {
    try {
        dispatch({
            type : 'PRODUCT_REQUEST'
        })
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/product${params}`)
        // console.log(result);
        // console.log(params);
        dispatch({
            type : 'PRODUCT_SUCCES',
        },)
        dispatch(pushProduct(result.data))

    } catch (error) {
        console.log(error);
        dispatch({
            type : 'PRODUCT_FAILED',
            payload : error
        })
    }
}

export const {pushProduct, setSearch} = productSlice.actions
export default productSlice.reducer