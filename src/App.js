import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Singup from "./pages/Signup";
import Adress from "./pages/ProductForm/Summary";
import HomeLayout from "./pages/HomeLayout";
import ProductLayout from "./pages/ProductForm/ProductFormLayout";
import ProductForm from "./pages/ProductForm/ProductForm";
import Payment from "./pages/ProductForm/Payment";
import Summary from "./pages/ProductForm/Summary";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        document.body.className = "bg-white text-black w-full h-full font-[bitter] text-lg font-normal dark:bg-gray-900 dark:text-white";
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index={true} element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
                <Route path="/cart" element={<Cart />} />
            </Route>

            <Route path="/product-forms" element={<ProductLayout />}>
                <Route index={true} element={<ProductForm />} />
                <Route path="payment" element={<Payment />} />
                <Route path="summary" element={<Summary />} />
            </Route>

            <Route path="/admin" />
        </Routes>
    );
}

export default App;
