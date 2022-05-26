import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Product from "./pages/product/Product";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import Sidebar from "./components/sidebar/Sidebar";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Products from "./pages/products/Products";
function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
