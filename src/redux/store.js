import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import resultsReducer from './resultsSlice'
import userSlice from './userSlice'

export default configureStore ({
    reducer: {
        resultSlice: resultsReducer,
        filterSlice: filterSlice,
        userSlice: userSlice
    }
})