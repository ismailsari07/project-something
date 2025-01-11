import { getImageURL } from "../utils/image-util";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion";

export default function Home() {
    console.log("home rendered")
    let [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/GetFeturedProducts")
        .then(response => {
            if (response.data.Status) {
                setFeaturedProducts(response.data.Response)
            } else {
                console.log("There was an error about featured products.")
            }
        })
        .catch(error => {
            console.error("There was an error about featured products.");
        });

    }, [])

    return (
        <motion.div
            initial={{opacity: 0, translateY: 30}}
            animate={{opacity: 1, translateY: 0}}
        >
            <div className='main-section relative flex h-full items-center justify-center mb-48'>
                <img src={getImageURL("/main-photo.png")} className='object-fill h-full w-full brightness-50 dark:brightness-75 rounded-3xl overflow-hidden' />
                <div className='absolute top-0 left-0 right-0 bottom-0 self-center w-full text-center text-7xl font-bold leading-5 text-white'><h1><span className="text-primary-400">Constructing</span> Your Future Today</h1></div>
            </div> 

            <div className='featured-products-section flex flex-col mb-48'>
                <div className="header-featured-products text-center text-5xl font-semibold leading-5 dark:text-white mb-24">
                <h2>Featured Products</h2>
                </div>
                <div className='main-featured-products flex flex-row justify-evenly mb-24'>
                    {featuredProducts.map((value, index) => {
                        return (
                            <div className="product-one w-fit h-fit flex flex-col items-center">
                                <div className="image-product w-80 h-80 mb-3">
                                    <img src={getImageURL(value.image_path)} alt="lakl" className='object-cover w-full h-full rounded-full overflow-hidden'/>
                                </div>
                                <div className="name-product underline dark:text-white font-semibold text-2xl mb-2">{value.product_name}</div>
                                <div className="price-product underline-offset-1">${value.price}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='footer-featured-products text-center'>
                    <NavLink to="/shop" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Shop All
                    </NavLink>
                </div>
            </div> 

            <div className="our-services-section p-14 mb-48">
                <div className="header-our-services text-5xl font-semibold leading-5 dark:text-white mb-24">
                <h2>Our Services</h2>
                </div>
                <div className="main-our-services flex justify-between">
                <div className="our-service-one w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
                    <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
                        <img src={getImageURL("/our-services-image1.png")} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
                    </div>
                    <div className="header-our-service underline dark:text-white mb-2">Construction Industry</div>
                    <div className="description-our-service">Building modern, durable, and energy-efficient homes tailored to your vision. From planning to execution, we handle every step with precision.</div>
                </div>
                <div className="our-service-two w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
                    <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
                        <img src={getImageURL("/our-services-image2.png")} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
                    </div>
                    <div className="header-our-service underline dark:text-white mb-2">Commercial Projects</div>
                    <div className="description-our-service">Delivering large-scale commercial construction projects, including offices, retail spaces, and warehouses, designed to meet your business needs.</div>
                </div>
                <div className="our-service-three w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
                    <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
                        <img src={getImageURL("/our-services-image3.png")} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
                    </div>
                    <div className="header-our-service underline dark:text-white mb-2">Renovation & Remodeling</div>
                    <div className="description-our-service">Transform your space with our expert renovation services. From kitchens to full-scale remodels, we breathe new life into your property.</div>
                </div>
                </div>
            </div>

            <div className="about-our-brand-section p-14 mb-48 rounded-2xl flex justify-between items-center">
                <div className="image-about-our-brand w-[635px] h-[810px]">
                    <img src={getImageURL("/about-our-brand.png")} className='object-cover w-full h-full rounded-2xl overflow-hidden' alt="" />
                </div>
                <div className="content-our-branc-section w-[50%] flex flex-col">
                    <div className="header-our-brand text-5xl font-semibold leading-5 dark:text-white mb-16"><h3>About Our Brand</h3></div>
                    <div className="explanation-our-brand mb-8 dark:text-white">Our company trades construction materials between Turkey and Canada and offers residential construction, commercial projects, and renovation services in the GTA. We deliver high-quality products and expert services to provide the best experience for our clients.</div>
                    <div className="button-our-brand"><NavLink to="/about" className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Learn More</NavLink></div>
                </div>
            </div>

        </motion.div>
    )
}