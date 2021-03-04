import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import resultsReducer from './resultsSlice'

export default configureStore ({
    reducer: {
        resultSlice: resultsReducer,
        filterSlice: filterSlice
    }
})