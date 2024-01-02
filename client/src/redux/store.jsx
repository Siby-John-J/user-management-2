import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profileSlice'
import modelSlice from './modelSlice'
import searchSlice from './searchSlice'
import authSlice from './authSlice'
import adminAuthSlice from './adminAuthSlice'

const store = configureStore({
    reducer: {
        profile: profileSlice,
        model: modelSlice,
        search: searchSlice,
        auth: authSlice,
        admin_auth: adminAuthSlice
    }
})

export default store