import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
    name: "results",
    initialState: {
        results: []
    },
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload
            }
        }
    }
)

export const { setResults } = resultsSlice.actions;

export const selectResults = state => state.results

export default resultsSlice.reducer