import './index.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import Shop from "./pages/Shop";
import Home from './pages/Home';
import Cart from './pages/Cart';

function FooterComponent() {
  return (
    <>
    <div className="footer-section flex justify-between py-14 items-start">
      <div className="site-title">
        <h2 className='text-3xl font-semibold text-[#0B0D63] mb-3'>Your Site Title</h2>
        <div className="made-with">Made with ...</div>
      </div>
      <div className="footer-location-contact flex">
        <div className="footer-location mr-12">
          <h2 className='text-2xl font-semibold leading-5 text-[#0B0D63] mb-3'>Location</h2>
          <div>123 Demo Street</div>
          <div>New York, NY 12345</div>
        </div>
        <div className="footer-contact">
          <h2 className='text-2xl font-semibold leading-5 text-[#0B0D63] mb-3'>Contact</h2>
          <div className="footer-email">xxx@example.com</div>
          <div className="footer-phone-number">555-555-55-55</div>
        </div>
      </div>
    </div>
    </>
  )
}

function App() {
  return (
    <div className='parent-section bg-[#f9fafb] w-full h-full p-14 font-[bitter] font-normal'>

          <div className='navbar-section flex justify-between pb-14 text-[#0B0D63]'>
            <div className='logo-section'>
                <a href='.' className='text-2xl leading-5 font-bold'>procer</a>
            </div>
            <nav className='navigation-section'>
                <ul className='font-[bitter]'>
                <li className='display list-none inline mr-6'><NavLink to="/Shop">Shop</NavLink></li>
                <li className='display list-none inline mr-6'><NavLink to="/About">About</NavLink></li>
                <li className='display list-none inline mr-6'><NavLink to="/Contact">Contact</NavLink></li>
                <li className='display list-none inline mr-6'><NavLink to="/Cart">Cart</NavLink></li>
                <li className='display list-none inline mr-6'>
                <a href='.'><button type='button' className='inline-block rounded-full bg-[#F08E80] px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Book Now</button></a>
                </li>
                </ul>
            </nav>
          </div>

          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/cart" element={<Cart />}/>
          </Routes>


          <FooterComponent/>
    </div>
  );
}

export default App;
