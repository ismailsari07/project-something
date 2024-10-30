import './index.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import Shop from "./pages/Shop";
import Home from './pages/Home';
import Cart from './pages/Cart';
import ThemeToggle from './components/ThemeToggle';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Singup from './pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './app/authSlice';

/*
// function hashedPassword(password) {
//   const bcrypt = require('bcryptjs');
// 
//   // Hash the password
//   bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(password, salt, (err, hash) => {
//           console.log(hash); // Store this hash in the database
//       });
//   });
// 
//   // To verify the password
//   bcrypt.compare(password, (err, isMatch) => {
//       if (isMatch) {
//           console.log("Password matches");
//       } else {
//           console.log("Password does not match");
//       }
//   });
// }
* */

function FooterComponent() {
  return (
    <>
    <div className="footer-section flex justify-between py-14 items-start">
      <div className="site-title">
        <h2 className='text-3xl font-semibold dark:text-white mb-3'>Your Site Title</h2>
        <div className="made-with">Made with ...</div>
      </div>
      <div className="footer-location-contact flex">
        <div className="footer-location mr-12">
          <h2 className='text-2xl font-semibold leading-5 dark:text-white mb-3'>Location</h2>
          <div>123 Demo Street</div>
          <div>New York, NY 12345</div>
        </div>
        <div className="footer-contact">
          <h2 className='text-2xl font-semibold leading-5 dark:text-white mb-3'>Contact</h2>
          <div className="footer-email">xxx@example.com</div>
          <div className="footer-phone-number">555-555-55-55</div>
        </div>
      </div>
    </div>
    </>
  )
}

async function getUser() {
  try {
    const repsonse = await axios.get("http://localhost:3000/GetUsers");
    console.log(repsonse.data);
  }
  catch(error) {
    console.log("Error: " + error);
  }
}

async function setUser() {
  let data = {name: "ali", email: "ayse"};
  axios.post("http://localhost:3000/SetUser", data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}

function App() {
  const {isThereUser} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    dispatch(logout());
  }

  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white w-full h-full p-14 font-[bitter] text-lg font-normal'>

          <div className='first-section-header flex flex-wrap justify-between items-center mb-14'>
            <div className='logo-section grow basis-0'>
              <a href='.' className='text-2xl leading-5 font-semibold dark:text-white'>Procer</a>
            </div>
            <div className="second-section-header flex items-center lg:order-2 justify-end grow basis-0">
              <ThemeToggle>
              <div className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon "><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              </div>
              </ThemeToggle>
              <div className="dropdown-language mr-2">
                <select className="w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option key={0} value={"TR"}>{"Türkçe"}</option>
                  <option key={1} value={"EN"}>{"Ingilizce"}</option>
                </select>                    
              </div>
              
              {isThereUser ? (
                <div className='flex'>
                  <div className='profile-logo text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                  </div>
                  <div className='log-out-text text-blue-600 dark:text-blue-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
                    <a href='' onClick={handleLogOutClick}>Log Out</a>
                  </div>
                </div>
              ) : (
                <div className='flex'>
                  <NavLink to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log In</NavLink>
                  <NavLink to="/singup" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Signup</NavLink>
                </div>
              )}
            </div>
            <nav className='third-section-header hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
              <ul>
                <li className='display list-none inline mr-6 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-700 text-gray-700'><NavLink to="/Shop" className={({isActive, isPending}) => isActive ? "dark:text-white text-primary-700 font-semibold" : ""}>Shop</NavLink></li>
                <li className='display list-none inline mr-6 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-700 text-gray-700'><NavLink to="/About" className={({isActive, isPending}) => isActive ? "dark:text-white text-primary-700 font-semibold" : ""}>About</NavLink></li>
                <li className='display list-none inline mr-6 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-700 text-gray-700'><NavLink to="/Contact" className={({isActive, isPending}) => isActive ? "dark:text-white text-primary-700 font-semibold" : ""}>Contact</NavLink></li>
                <li className='display list-none inline mr-6 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-700 text-gray-700'><NavLink to="/Cart" className={({isActive, isPending}) => isActive ? "dark:text-white text-primary-700 font-semibold" : ""}>Cart</NavLink></li>
                <li className='display list-none hidden mr-6 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-700 text-gray-700'>
                  <a href='.'>
                    <button type='button' className='inline-block rounded-full bg-[#F08E80] px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Book Now</button>
                  </a>
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
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Singup />}/>
          </Routes>

          <FooterComponent/>
    </div>
  );
}

export default App;
