import { useDispatch } from "react-redux";
import myFeaturedProductOne from "../featured-products-one.png";
import { addProduct } from "../app/usersCartSlice";
export default function Shop() {
    const dispatch = useDispatch();

    // id: 1, 
    // cart_id: 101,
    // product_id: 501,
    // product_name: "Wireless Headphones",
    // price: 79.99,
    // quantity: 2,
    // total_price: 79.99 * 2,
    // added_at: "2024-11-05T12:00:00Z",
    // updated_at: "2024-11-05T12:00:00Z",
    // explanation: "High-quality wireless headphones with noise-cancellation features." // Brief description of the product
    const cart = [
        {
            id: 1, 
            cart_id: 101,
            product_id: 501,
            product_name: "Wireless Headphones",
            price: 79.99,
            quantity: 2,
            total_price: 79.99 * 2,
            added_at: "2024-11-05T12:00:00Z",
            updated_at: "2024-11-05T12:00:00Z",
            explanation: "High-quality wireless headphones with noise-cancellation features." // Brief description of the product
        },
        {
            id: 2,
            cart_id: 101,
            product_id: 502,
            product_name: "Bluetooth Speaker",
            price: 49.99,
            quantity: 1,
            total_price: 49.99 * 1,
            added_at: "2024-11-05T12:15:00Z",
            updated_at: "2024-11-05T12:15:00Z",
            explanation: "Compact and portable Bluetooth speaker with deep bass." // Brief description of the product
        },
        {
            id: 3,
            cart_id: 101,
            product_id: 503,
            product_name: "Smartphone Stand",
            price: 14.99,
            quantity: 3,
            total_price: 14.99 * 3,
            added_at: "2024-11-05T13:00:00Z",
            updated_at: "2024-11-05T13:00:00Z",
            explanation: "Adjustable smartphone stand, perfect for video calls and streaming." // Brief description of the product
        },
        {
            id: 4,
            cart_id: 101,
            product_id: 504,
            product_name: "USB-C Cable",
            price: 9.99,
            quantity: 4,
            total_price: 9.99 * 4,
            added_at: "2024-11-05T13:30:00Z",
            updated_at: "2024-11-05T13:30:00Z",
            explanation: "Durable USB-C cable compatible with fast charging devices." // Brief description of the product
        },
        {
            id: 5,
            cart_id: 101,
            product_id: 505,
            product_name: "Portable Charger",
            price: 29.99,
            quantity: 2,
            total_price: 29.99 * 2,
            added_at: "2024-11-05T14:00:00Z",
            updated_at: "2024-11-05T14:00:00Z",
            explanation: "Compact 10000mAh portable charger for on-the-go power." // Brief description of the product
        }
    ];

    const clickAddProduct = (product_id, product_name, price, quantity) => {
        dispatch(addProduct({ product_id, product_name, price, quantity }))
    }

    return (
        <div className="flex flex-wrap justify-between content-between ">
            {cart.map((value, index) => {
                return (
                    <div className="items relative w-[24%] flex flex-col mb-[2%] p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white" key={index}>
                        <div className="image">
                            <img src={myFeaturedProductOne} alt="1" className="rounded-lg" />
                        </div>
                        <h2 className="font-semibold text-xl mt-3">{value.product_name}</h2>
                        <p className="dark:text-gray-400">{value.explanation}</p>
                        <div className="price add-to-cart flex justify-between items-center mt-3">
                            <span className="font-bold text-2xl">{value.price}</span>
                            <button type='button' onClick={() => clickAddProduct(value.product_id, value.product_name, value.price, value.quantity)} className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}