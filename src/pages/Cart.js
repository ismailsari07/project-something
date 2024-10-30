import myFeaturedProductOne from "../featured-products-one.png";
export default function Cart() {
    return (
        <div className="flex justify-between items-start">
            <div className="shopping-cart flex flex-col w-[70%]">
                {[1,2,3,4,5,6,7].map((x,y) => {
                    return (
                        <div key={x} className="order flex items-center justify-between w-full p-6 mb-3 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                            <div className="w-[70%] flex items-center gap-8">
                                <div className="image">
                                    <img className="h-20 w-20 rounded-lg" src={myFeaturedProductOne} alt="imac image" />

                                </div>
                                <div className="flex flex-col justify-between items-start h-fit gap-4">
                                    <a href="#" className="text-base font-medium hover:underline">Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band</a>
                                    <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="price w-[10%] font-bold">$1993</div>
                        </div>
                    )
                })}
            </div>
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
                        <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                        <input type="text" id="voucher" className="block w-full  p-2.5 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                        </div>
                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1e40af] focus:outline-none focus:ring-4 ">Apply Code</button>
                    </form>
                </div>
            </div>
        </div>
    )
}