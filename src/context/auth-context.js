import { useContext, createContext, useReducer } from "react";
import { authReducer } from "../reducer";   

const initialValue={
    isAuthModalOpen: false,
    username: "",
    number: "",
    email: "",
    password: "",
    confirmPassword:"",
    accessToken:"",
    name:"",
    selectedTab: "Login"
}

const AuthContext = createContext(initialValue);

const AuthProvider=({children})=>{
    
    const [{isAuthModalOpen, username, number, email, password, confirmPassword, accessToken, name, selectedTab}, authDispatch] = useReducer(authReducer, initialValue)

    return <AuthContext.Provider value={{isAuthModalOpen, username, number, email, password, confirmPassword, accessToken, name, selectedTab, authDispatch}}>{children}</AuthContext.Provider>
}

const useAuth=()=> useContext(AuthContext);

export {useAuth, AuthProvider}