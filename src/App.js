import './index.css';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import Shop from "./pages/Shop";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Singup from './pages/Signup';
import Adress from './pages/ProductForm/Summary';
import HomeLayout from './pages/HomeLayout';
import ProductLayout from './pages/ProductForm/ProductFormLayout';
import ProductForm from './pages/ProductForm/ProductForm';
import Payment from './pages/ProductForm/Payment';
import Summary from './pages/ProductForm/Summary';

function App() {
  console.log("app rendered");
  return (
          <Routes className="h-full">
            <Route path="/" element={<HomeLayout/>}>
              <Route index={true} element={<Home />}/>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/singup" element={<Singup />}/>
              <Route path="/cart" element={<Cart />}/>
            </Route>

            <Route path="/product-forms" element={<ProductLayout />}>
              <Route index={true} element={<ProductForm />}/>
              <Route path="payment" element={<Payment />}/>
              <Route path="summary" element={<Summary />}/>
            </Route>

            <Route path="/admin" />
          </Routes>
  );
}

export default App;
