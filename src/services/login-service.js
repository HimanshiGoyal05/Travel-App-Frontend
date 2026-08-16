import axios from "axios";

export const loginHandler = async (number, password, setAlert) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(
      "https://breeze-travel-planner-app.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      },
    );
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success",
    });
    return { accessToken, username };
  } catch (err) {
    console.log("Unable to login ", err);
  }
};
