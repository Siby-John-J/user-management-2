import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: '',
    reducers: {
        setSearch: (state, data) => {
            // console.log(data)
            return data.payload
        },
    },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer
