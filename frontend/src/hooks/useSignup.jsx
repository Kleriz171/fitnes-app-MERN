import { useState } from "react";
import { useAuthContext} from "./useAuthContext"

export const useSignup = () =>{
    const API_URL = import.meta.env.VITE_API_URL || ''
    const [error, setError]  = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/api/user/signup`,
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            }
        )
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save user to lokal storaxh
            localStorage.setItem('user', JSON.stringify(json))

            //update authcontext
            dispatch({type:"LOGIN", payload: json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}
