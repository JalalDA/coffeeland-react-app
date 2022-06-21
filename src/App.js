
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
import PrivateAdmin from "./components/private/PrivateAdmin";
import AddProduct from "./pages/addProduct/AddProduct";
import EditProduct from "./pages/editProduct/EditProduct";
import AddPromo from "./pages/promo/AddPromo";

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
            <PrivateElement redirectTo="/login" extraData={{isAuthenticated : false}}>
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
          <Route path="/addproduct" element={
            <PrivateAdmin>
              <AddProduct/>
            </PrivateAdmin>
          }/>
          <Route path="/editproduct/:id" element={
            <PrivateAdmin>
              <EditProduct/>
            </PrivateAdmin>
          }/>
          <Route path="/addpromo" element={
            <PrivateElement>
              <AddPromo/>
            </PrivateElement>
          }/>
          <Route path="*" element={
            <main className="d-flex justify-content-center flex-column align-items-center p-4 fw-bold">
              <b>Page not found</b>
              <b className="404" style={{fontSize : '350px'}}>404</b>
            </main>
          }/>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
