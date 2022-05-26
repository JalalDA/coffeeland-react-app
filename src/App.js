
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/profile" element={<Profile/> }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
