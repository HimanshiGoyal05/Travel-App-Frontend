import axios from "axios"

export const signupHandler=async (username, number, email, password)=>{
    try{
        const data= await axios.post("https://breeze-travel-planner-app.onrender.com/api/auth/register", {
            username: username,
            number: number,
            email: email,
            password: password
        })
        return data;
    }catch(err){
        console.log(err)
    }
}