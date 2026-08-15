import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {data: { accessToken:accessToken, username}} = await axios.post(
      "https://breeze-travel-planner-app.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log({accessToken, username});
    return {accessToken, username}
  } catch (err) {
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
    console.log("Message:", err.response?.data?.message);
}
};
