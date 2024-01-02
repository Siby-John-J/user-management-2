import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        setAdminAuth: (state) => {
            return !state
        },
    },
})

export const { setAdminAuth } = adminAuthSlice.actions;
export default adminAuthSlice.reducer
