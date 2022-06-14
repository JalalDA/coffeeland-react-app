
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Forgot from "./pages/forgot-password/Forgot";
import Product from "./pages/product/Product";
import FavProduct from "./pages/product/FavProduct";
import Cart from "./pages/cart/Cart";
import History from "./pages/history/History";
import Modal from "./components/Modal/Modal";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateElement from "./components/private/PrivateElement";
import PrivateLogin from "./components/private/PrivateLogin";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import {persistStore} from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react";
import Orders from "./pages/orders/Orders";
import Prompt from "./components/prompt/Prompt";
import HeaderFunction from "./components/header/HeaderFunction";
import PrivateAdmin from "./components/private/PrivateAdmin";

let persistor = persistStore(store)

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/producttest" element={<Producttest/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/profile" element={
            <PrivateElement redirectTo="/login">
              <Profile/>
            </PrivateElement> 
          }/>
          <Route path="/login" element={
            <PrivateLogin redirectTo="/">
              <Login/>
            </PrivateLogin> 
          }/>
          <Route path="/register" element={
            <PrivateLogin redirectTo="/">
              <Register/>
            </PrivateLogin> 
          }/>
          <Route path="/forgot-password" element={ <Forgot/>}/>
          <Route path="/product/favorit" element={<FavProduct/>}/>
          <Route path="/your-cart" element={
            <PrivateElement redirectTo="/login">
              <Cart/>
            </PrivateElement>
          }/>
          <Route path="/history"  element={
            <PrivateElement redirectTo="/login">
              <History/>
            </PrivateElement>
          }/>
          <Route path="/modal" element={<Modal />} />
          <Route path="/dashboard" element={
            <PrivateAdmin>
                <Dashboard/>
            </PrivateAdmin>
          } />
          <Route path="/orders" element={
          <PrivateAdmin>
            <Orders/>
          </PrivateAdmin>}/>
          <Route path="/prompt" element={<Prompt/>}/>
          <Route path="/headerfunction" element={<HeaderFunction/>}/>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
