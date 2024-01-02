import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        id: ''
    },
    reducers: {
        setAuth: (state, data) => {
            return {
                isLogin: !state.isLogin,
                id: data.payload
            }
        },
    },
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer
