import { AuthLogin, AuthSignup } from "../index";
import "./AuthModal.css"
import { useAuth } from "../../context";

export const AuthModal=()=>{
    const {authDispatch, selectedTab}=useAuth();

    const handleLoginClick=()=>{
        authDispatch({
            type: "SET_TO_LOGIN"
        })
    }

    const handleSignupClick=()=>{
        authDispatch({
            type: "SET_TO_SIGNUP"
        })
    }

    const handleModalCloseClick=()=>{
        authDispatch({
            type: "OPEN_AUTH_MODAL"
        })
    }

    return (
        <div className="auth-modal-container fixed">
            <div className="auth-modal absolute right-0">
                <div className="flex items-center shadow">
                    <button className={`btn flex-1 cursor-pointer btn-auth ${selectedTab==="Login" ? "btn-auth-selected" : ""}`} onClick={handleLoginClick}>Login</button>
                    <button className={`btn flex-1 cursor-pointer btn-auth ${selectedTab==="Signup" ? "btn-auth-selected" : ""}`} onClick={handleSignupClick}>Signup</button>
                    <button className="btn cursor-pointer btn-auth flex items-center justify-center btn-close" onClick={handleModalCloseClick}><span className="material-icons-outlined">close</span></button>
                </div>
                <div>
                    {
                       selectedTab === "Login" ? <AuthLogin /> : selectedTab === "Signup" ? <AuthSignup /> : "" 
                    }
                </div>
            </div>
        </div>
    )
}