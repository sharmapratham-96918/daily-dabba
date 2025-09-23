import axios from "axios"

//fetching users
const fetchAllUsers = async (token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/view-users" , options)
    return response.data

}

// // fetching orders
const fetchAllOrders = async (token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/view-Orders" ,options)
    return response.data

}

//fetching ratings
const fetchAllRatings = async (token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/view-ratings" , options)
    return response.data

}


//fetching meals
const fetchAllMeals = async (token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/meal" , options)
    return response.data

}

// remove meal

const deletMeal = async (id , token) => {
        const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(`/api/admin/remove-meal/${id}` , options)
    return response.data

}

// ADD NEW MEAL

const createMeal = async (formData , token) => {


     const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post("/api/admin/add-meal" , formData , options)
    return response.data
}

// UPDATE MEAL

const updateMeal = async (updatedMeal , token) => {

     const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.put("/api/admin/update-meal/" + updatedMeal._id , updatedMeal , options)
    return response.data
}

// Update the order status

const updateOrder = async (orderUpdate , token) => {

     const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.put("/api/admin/update-order/" + orderUpdate._id, {status : orderUpdate.status} , options) 
    return response.data
}


    



const adminService = {
    fetchAllUsers,
    fetchAllOrders,
    fetchAllRatings,
    fetchAllMeals,
    deletMeal,
    createMeal,
    updateMeal,
    updateOrder
}

export default adminService