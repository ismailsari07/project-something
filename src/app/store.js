import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import usersCartReducer from "./usersCartSlice";
import productsReducer from "./productsSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        usersCart: usersCartReducer,
        products: productsReducer
    }
})