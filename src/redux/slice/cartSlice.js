import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        value : []
    },
    reducers : {
        addtocart : (state, action)=>{
            return {value : (action.payload)}

        }
    }
})

export const {addtocart} = cartSlice.actions
export default cartSlice.reducer
