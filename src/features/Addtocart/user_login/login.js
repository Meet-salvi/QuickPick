import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:null,
    isFetching: false,
    error: false,
}

export const userlogin = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginsuccess: (state, action) => {
            state.user = action.payload;
            state.isFetching = true;
        },
        logout : (state) => {
            state.user = null;
            state.isFetching = false
        }

    },
})

// Action creators are generated for each case reducer function
export const {loginsuccess , logout} = userlogin.actions

export default userlogin.reducer