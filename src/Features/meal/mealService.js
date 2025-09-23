
import axios from "axios"

const fetchMeal = async (mid) => {
    const response = await axios.get('/api/meal/' + mid)
    return response.data
}

const fetchMeals = async () => {
    const response = await axios.get('/api/meal')
    return response.data
}




const mealService = { fetchMeal, fetchMeals }


export default mealService
