import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isThereUser: false,
        userName: '',
        country: '',
        phoneNumber: '',
        email: ''
    },
    reducers: {
        login: (state, action) => {
            state.isThereUser= true
            state.userName= action.userName
            state.country= action.country
            state.phoneNumber= action.phoneNumber
            state.email= action.email
        },
        logout: (state) => {
            state.isThereUser = false
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;