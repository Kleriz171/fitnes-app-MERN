import { creaateContext, useReducer, useState } from "react";

export const AuthContext =  createContext();

export const authReducer = (state, action) =>{
    switch(action.type) {
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGUT':
            return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({childern}) =>{
    const [state,dispatch] = useReducer(authReducer,{
        user: null
    })

    console.log('AuthContext state: ', state)

    return(
        <AuthContext.Provider value = {{...state, dispatch}}>
            {childern}
        </AuthContext.Provider>
    )
}