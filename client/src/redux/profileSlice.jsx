import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        inc: (state, data) => {
            // console.log(data)
            return data.payload
        }
    }
})

export const { inc } = profileSlice.actions 
export default profileSlice.reducer