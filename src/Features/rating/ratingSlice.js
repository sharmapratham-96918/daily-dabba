import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ratingService from "./ratingService";

const ratingSlice = createSlice({
    name: 'rating',
    initialState: {
        ratings: [],
        ratingsLoading: false,
        ratingsSuccess: false,
        ratingError: false,
        ratingErrorMessage: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase( getRatings.pending , (state , action) =>{
            state.ratingsLoading = true 
            state.ratingsSuccess = false
            state.ratingError = false
        })
        .addCase( getRatings.fulfilled , (state , action) =>{
            state.ratingsLoading = false 
            state.ratingsSuccess = true
            state.ratings = action.payload
            state.ratingError = false
        })
        .addCase( getRatings.rejected , (state , action) =>{
            state.ratingsLoading = false
            state.ratingsSuccess = false
            state.ratingError = true
            state.ratingErrorMessage = action.payload
        })
        .addCase( addRatings.pending , (state , action) =>{
            state.ratingsLoading = true 
            state.ratingsSuccess = false
            state.ratingError = false
        })
        .addCase( addRatings.fulfilled , (state , action) =>{
            state.ratingsLoading = false 
            state.ratingsSuccess = true
            state.ratings = [ ...state.ratings , action.payload]
            state.ratingError = false
        })
        .addCase( addRatings.rejected , (state , action) =>{
            state.ratingsLoading = false
            state.ratingsSuccess = false
            state.ratingError = true
            state.ratingErrorMessage = action.payload
        })

    }

})

export default ratingSlice.reducer

//get ratings

export const getRatings = createAsyncThunk("FETCH/RATINGS", async (mid, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return ratingService.fetchRatings(mid, token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

//add ratings

export const addRatings = createAsyncThunk("ADD/RATINGS", async (rating, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return ratingService.addRating(rating , token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

