import { useDispatch, useSelector } from "react-redux";
import myFeaturedProductOne from "../featured-products-one.png";
import { addProduct, changeQuantityUserOfProduct } from "../app/usersCartSlice";
import axios from "axios";
import { initProductsList } from "../app/productsSlice";
import {motion} from "framer-motion"

export default function Shop() {
    const dispatch = useDispatch();

    const {productsList} = useSelector(state => state.usersCart);
    const {totalProductsList} = useSelector(state => state.products)

    const clickAddProduct = (product_id, product_name, price, quantity, quantity_user) => {
        let itemIndex = productsList.findIndex(product => product.product_id === product_id);
        if (itemIndex === -1) {
            dispatch(addProduct({ product_id, product_name, price, quantity, quantity_user }))
        } else {
            dispatch(changeQuantityUserOfProduct({product_id, amount: 1}));
        }
    }

    const getProducts = () => {
        axios.get("http://localhost:3000/GetProducts")
        .then(response => {
            if (response.data.Status) {
                dispatch(initProductsList(response.data.Response))
            } else {
                console.log("There was an error about featured products.")
            }
        })
    }
    getProducts();

    return (
        <motion.div
            initial={{opacity: 0, translateY: 30}}
            animate={{opacity: 1, translateY: 0}} 
            className="flex flex-wrap justify-between content-between ">
            {totalProductsList.map((value, index) => {
                return (
                    <div className="items relative w-[24%] flex flex-col justify-between mb-[2%] p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white" key={index}>
                        <div className="image">
                            <img src={myFeaturedProductOne} alt="1" className="rounded-lg" />
                        </div>
                        <h2 className="font-semibold text-xl mt-3">{value.product_name}</h2>
                        <p className="dark:text-gray-400">{value.explanation}</p>
                        <div className="price add-to-cart flex justify-between items-center mt-3">
                            <span className="font-bold text-2xl">${value.price}</span>
                            <button type='button' onClick={() => clickAddProduct(value.product_id, value.product_name, value.price, value.quantity, 1)} className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}