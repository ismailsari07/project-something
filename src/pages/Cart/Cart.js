import { useDispatch, useSelector } from "react-redux";
import myFeaturedProductOne from "../../featured-products-one.png";
import emptyCart from "../../emptyCart.png";
import { changeQuantityUserOfProduct, deleteProduct } from "../../app/usersCartSlice";
export default function Cart() {
    const {productsList} = useSelector(state => state.usersCart)
    const {isThereUser} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const clichChangeQuantity = (product_id, amount) => {
        dispatch(changeQuantityUserOfProduct({product_id, amount}));
    }

    const clickDeleteProduct = (product_id) => {
        dispatch(deleteProduct(product_id));
    }
    
    return (
        <div className="flex justify-between items-start h-full">
            {productsList.length == 0 ? (
                <div className="flex flex-col justify-center items-center w-[100%] p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <img src={emptyCart} alt="1" className="w-80 h-80" />
                    <h2 className="text-3xl mb-3">Your Cart is Empty</h2>
                    <p className="text-gray-400 mb-24">Looks like you haven't added anything to your cart yet</p>
                </div>
            ) : ( <div className="shopping-cart flex h-[100vh] flex-col w-[70%]"> {productsList.map((value,index) => { return (
                            <div key={index} className="order flex items-center justify-between w-full p-6 mb-3 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                                <div className="w-[10%] flex items-center gap-8">
                                    <div className="image">
                                        <img className="h-20 w-20 rounded-lg" src={myFeaturedProductOne} alt="imac image" />
                                    </div>
                                </div>
                                <div className="w-[70%] flex items-center gap-8">
                                    <div className="flex flex-col justify-between items-start h-fit gap-4">
                                        <a href="#" className="text-lg font-medium hover:underline">{value.product_name}</a>
                                        <button type="button" onClick={() => clickDeleteProduct(value.product_id)} className="inline-flex  items-center text-sm font-medium text-red-600 hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                            <span className="text-base ml-2">Remove</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[10%] flex items-center gap-8">
                                    <div className="flex justify-between items-center">
                                        <button disabled={value.quantity_user == 1} onClick={() => clichChangeQuantity(value.product_id, -1)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
                                        </button>
                                        <span className="mx-4">
                                            {value.quantity_user}
                                        </span>
                                        <button onClick={() => clichChangeQuantity(value.product_id, 1)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="price w-[5%] font-bold">${value.price}</div>
                            </div>
                        )
                    })}
                </div>
            )}
            {isThereUser && productsList.length != 0 ? (
                <div className="order-summary flex flex-col w-[20%] justify-between p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <div className="order">
                        <div className="space-y-4">
                            <div className="space-y-2 ">
                                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                <div className="flex justify-between">
                                    <div className="font-normal dark:text-gray-300">Original Price: </div>
                                    <div className="font-medium dark:text-white">$8395.38</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal dark:text-gray-300">Savings: </div>
                                    <div className="font-medium dark:text-white">$299.99</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal dark:text-gray-300">Store Pickup: </div>
                                    <div className="font-medium dark:text-white">$99</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal dark:text-gray-300">Tax: </div>
                                    <div className="font-medium dark:text-white">$799</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <div className="text-base font-bold dark:text-gray-300">Total</div>
                                <div className="text-base font-bold dark:text-white">$8,191.00</div>
                            </div>
                        </div>
                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1e40af] focus:outline-none focus:ring-4 mt-3">Proceed to Checkout</button>
                    </div>
                    <div className="gift-card space-y-4 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white p-4 mt-8">
                        <form className="space-y-4">
                            <div>
                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                            <input type="text" id="voucher" className="block w-full  p-2.5 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                            </div>
                            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1e40af] focus:outline-none focus:ring-4 ">Apply Code</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    )
}