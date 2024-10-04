import myFeaturedProductOne from "../featured-products-one.png";
export default function Shop() {
    return (
        <div className="flex flex-wrap justify-between content-between ">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((value, index) => {
                return (
                    <div className="items relative w-[24%] flex flex-col mb-[2%] p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white" key={index}>
                        <div className="image">
                            <img src={myFeaturedProductOne} alt="1" className="rounded-lg" />
                        </div>
                        <h2 className="font-semibold text-xl mt-3">Product {index}</h2>
                        <p className="dark:text-gray-400">Lorem ipsum dolor sit amet.</p>
                        <div className="price add-to-cart flex justify-between items-center mt-3">
                            <span className="font-bold text-2xl">$1099</span>
                            <button type='button' className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Add to Cart</button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

/**text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 */
/**inline-block rounded-lg bg-[#1e40af] px-3 pb-1 pt-1.5 text-base leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300 */