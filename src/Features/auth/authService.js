import axios from "axios"

const register = async (formData) => {

    const responce = await axios.post("/api/auth/register" , formData)
    localStorage.setItem('user' , JSON.stringify(responce.data))
    return responce.data

}

const login = async (formData) => {

    const responce = await axios.post("/api/auth/login" , formData)
    localStorage.setItem('user' , JSON.stringify(responce.data))
    return responce.data

}


const authService = {register , login}

export default authService