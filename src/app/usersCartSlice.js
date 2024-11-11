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
            // }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.productsList.push(action.payload);
        },
        deleteProduct: (state, action) => {
            //todo: delete process
        }
    }
})

export const {addProduct, deleteProduct} = usersCartSlice.actions;
export default usersCartSlice.reducer;