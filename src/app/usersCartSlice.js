import { createSlice } from "@reduxjs/toolkit";

export const usersCartSlice = createSlice({
    name: 'usersCart',
    initialState: {
        productsList: [
            // {
            //     id: 0, 
            //     cart_id: 0,
            //     product_id: 0,
            //     product_name: "",
            //     price: 0.0,
            //     quantity: 0,
            //     total_price: 0,
            //     added_at: "",
            //     updated_at: "",
            //     explanation: "" // Brief description of the product
            //     quantity_user: 0
            // }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.productsList = [
                action.payload,
                ...state.productsList
            ]
        },
        changeQuantityUserOfProduct: (state, action) => {
            state.productsList = state.productsList.map(product => {
                if (action.payload.product_id === product.product_id) {
                    product.quantity_user = product.quantity_user + action.payload.amount;
                }
                return product
            })
        },
        deleteProduct: (state, action) => {
            state.productsList = state.productsList.filter(item => item.product_id !== action.payload)
        }
    }
})

export const {addProduct,changeQuantityUserOfProduct, deleteProduct} = usersCartSlice.actions;
export default usersCartSlice.reducer;