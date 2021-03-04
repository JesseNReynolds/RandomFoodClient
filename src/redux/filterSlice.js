import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        filters: {}
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        }
    }
});

export const { setFilters } = filterSlice.actions
export default filterSlice.reducer