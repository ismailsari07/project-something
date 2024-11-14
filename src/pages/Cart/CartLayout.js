import { useSelector } from "react-redux";
import {Outlet} from "react-router-dom";

export default function CartLayout() {
    const {productsList} = useSelector(state => state.usersCart)
    const {isThereUser} = useSelector(state => state.auth);

    return (
        <div>
            {isThereUser && productsList.length != 0 && (
                <div className="flex justify-center">
                    <ul className="flex w-[70%] gap-4 justify-between items-center mb-10">
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                            <span className="ml-3">Cart</span>
                        </li>
                        <hr className="w-full"/>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                            <span className="ml-3">Adress</span>
                        </li>
                        <hr className="w-full"/>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                            <span className="ml-3">Payment</span>
                        </li>
                        <hr className="w-full"/>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                            <div className="ml-3">Summary</div>
                        </li>
                    </ul>
                </div>
            )}
            <Outlet />
        </div>
    )
}