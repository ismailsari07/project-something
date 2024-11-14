import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        cartSection: false,
        adressSection: false,
        paymentSection: false,
        summarySection: false
    },
    reducers: {
        cartSectionCompleted: (state,action)
    }
})