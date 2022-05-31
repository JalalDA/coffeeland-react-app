
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

function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/profile" element={token ? <Profile/> : <Login/>}/>
          <Route path="/login" element={token? <Home/> : <Login/>}/>
          <Route path="/register" element={token? <Home/> : <Register/>}/>
          <Route path="/forgot-password" element={token ? <Home/> : <Forgot/>}/>
          <Route path="/product/favorit" element={<FavProduct/>}/>
          <Route path="/your-cart" element={ token ? <Cart/> : <Home/>}/>
          <Route path="/history"  element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
