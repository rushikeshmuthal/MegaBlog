import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    userData:null
}

// this authslice is made to provide the info to store that user is logged in or  not and also provides data of the user if he is logged in. 

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action)=> {
            state.status = true,
            state.userData= action.payload
        },
        logout: (state)=> {
            state.status = false
            state.userData = null
        }
    }
})

export const {login,logout} = authSlice.actions
export default  authSlice.reducer;