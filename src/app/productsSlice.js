import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        totalProductsList: []
    },
    reducers: {
        initProductsList: (state,action) => {
            state.totalProductsList = action.payload
        }
    }
})

export const {initProductsList} = productsSlice.actions;
export default productsSlice.reducer;