import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import usersCartReducer from "./usersCartSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        usersCart: usersCartReducer
    }
})