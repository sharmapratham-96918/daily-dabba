import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : builder => {
        builder
        .addCase(registeUser.pending , (state , action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        
        .addCase(registeUser.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
            state.isError = false
        })
        
        .addCase(registeUser.rejected , (state , action) => {
            state.isLoading = true
            state.isSuccess = false
            state.message = action.payload
            state.isError = true
        })
        .addCase(loginUser.pending , (state , action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        
        .addCase(loginUser.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
            state.isError = false
        })
        
        .addCase(loginUser.rejected , (state , action) => {
            state.isLoading = true
            state.isSuccess = false
            state.message = action.payload
            state.isError = true
        })

        .addCase(logoutUser.fulfilled , (state , action) => {
            state.user = null
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
            state.isError = true
        })
    }
})

export default authSlice.reducer

// Register user

export const registeUser = createAsyncThunk("AUTH/REGISTE" , async(formData , thunkApi) => {

    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.responce.data.message
        return thunkApi.rejectWithValue(message) 
    }
})

// Login user

export const loginUser = createAsyncThunk("AUTH/LOGIN" , async(formData , thunkApi) => {

    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.responce.data.message
        return thunkApi.rejectWithValue(message) 
    }
})


// Logout user

export const logoutUser = createAsyncThunk("AUTH/LOGOUT" , async(formData , thunkApi) => {
    localStorage.removeItem("user")
})