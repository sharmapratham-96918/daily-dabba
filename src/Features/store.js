import { configureStore } from "@reduxjs/toolkit";
import auth from "../Features/auth/authSlice"
import admin from "../Features/admin/adminSlice"
import meal from "../Features/meal/mealSlice"
import rating from "../Features/rating/ratingSlice"
import order from "../Features/order/orderSlice"


const store = configureStore({
    reducer :{auth , admin , meal , rating , order }
})

export default store