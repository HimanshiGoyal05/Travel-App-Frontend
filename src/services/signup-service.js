import axios from "axios";

export const signupHandler = async (
  username,
  number,
  email,
  password,
  setAlert,
) => {
  try {
    const data = await axios.post(
      "https://breeze-travel-planner-app.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      },
    );
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success",
    });
    return data;
  } catch (err) {
    console.log("Error adding user", err);
  }
};
