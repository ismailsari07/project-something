import { eventWrapper } from "@testing-library/user-event/dist/utils";
import myFeaturedProductOne from "../featured-products-one.png";
export default function Shop() {
    return (
        <div className="flex flex-wrap justify-between content-between ">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((value, index) => {
                return (
                    <div className="items relative w-[24%] flex flex-col mb-[2%] rounded-lg border border-gray-200 bg-white p-6 shadow-sm" key={index}>
                        <div className="image">
                            <img src={myFeaturedProductOne} alt="1" className="rounded-lg" />
                        </div>
                        <h2 className="font-semibold text-xl mt-3">Product {index}</h2>
                        <p className="">Lorem ipsum dolor sit amet.</p>
                        <div className="price add-to-cart flex justify-between items-center mt-3">
                            <span className="font-bold text-2xl">$1099</span>
                            <button type='button' className='inline-block rounded-lg bg-[#1e40af] px-3 pb-1 pt-1.5 text-base leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}