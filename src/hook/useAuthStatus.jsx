import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

 const useAuthStatus = () => {

    const {user} = useSelector(state => state.auth)


    const [checkUser , setCheckUser] = useState(true)
    const [isloggedIn , setIsLoggedIn] = useState(false)

    useEffect(() => {

        user ? setIsLoggedIn(true) :setIsLoggedIn(false)
        setCheckUser(false)

    },[user])

    return {checkUser , isloggedIn}


 }

 export default useAuthStatus