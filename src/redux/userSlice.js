import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const userSlice = createSlice({
    name: "user",
    initialState: {
        fbId: ''
    },
    reducers: {
        setFbId: (state, action) => {
            state.fbId = action.payload
            }
        }
    }
);

export const { setFbId } = userSlice.actions;

export default userSlice.reducer