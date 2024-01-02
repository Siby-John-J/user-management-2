import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
    name: "model",
    initialState: false,
    reducers: {
        setProfile: (state) => {
            return !state;
        },
    },
})

export const { setProfile } = modelSlice.actions;
export default modelSlice.reducer
