import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import loginSlice from "./loginSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


const persistConfig = {
  key : 'persist', 
  storage
}
const reducers = combineReducers({
    cart : cartSlice,
    product : productSlice,
    login: loginSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store =  configureStore({
    reducer : persistedReducer,
    middleware :  (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools : true
})