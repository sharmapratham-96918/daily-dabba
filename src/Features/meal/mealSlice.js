import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mealService from "./mealService";


const mealSlice = createSlice({
    name: 'meal',
    initialState: {
        meals: [],
        meal: {},
        mealLoading: false,
        mealSuccess: false,
        mealError: false,
        mealErrorMessage: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getMeal.pending, (state, action) => {
                state.mealLoading = true
                state.mealSuccess = false
                state.mealError = false
            })
            .addCase(getMeal.fulfilled, (state, action) => {
                state.mealLoading = false
                state.mealSuccess = true
                state.meal = action.payload
                state.mealError = false
            })
            .addCase(getMeal.rejected, (state, action) => {
                state.mealLoading = false
                state.mealSuccess = false
                state.mealError = true
                state.mealErrorMessage = action.payload
            })
            .addCase(getMeals.pending, (state, action) => {
                state.mealLoading = true
                state.mealSuccess = false
                state.mealError = false
            })
            .addCase(getMeals.fulfilled, (state, action) => {
                state.mealLoading = false
                state.mealSuccess = true
                state.meals = action.payload
                state.mealError = false
            })
            .addCase(getMeals.rejected, (state, action) => {
                state.mealLoading = false
                state.mealSuccess = false
                state.mealError = true
                state.mealErrorMessage = action.payload
            })
    }
})

export default mealSlice.reducer



// GET SINGLE MEAL
export const getMeal = createAsyncThunk("FETCH/MEAL", async (mid, thunkAPI) => {
    try {
        return await mealService.fetchMeal(mid)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// GET MEALS
export const getMeals = createAsyncThunk("FETCH/MEALS", async (_, thunkAPI) => {
    try {
        return await mealService.fetchMeals()
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})