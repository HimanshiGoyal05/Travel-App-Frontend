import "./Auth.css";
import { useAuth } from "../../context";
import { validateNumber, validatePassword } from "../../utils";
import { loginHandler } from "../../services";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const {accessToken, username} = loginHandler(number, password);
      authDispatch({
        type:"SET_ACCESS_TOKEN",
        payload: accessToken
      })
      authDispatch({
        type:"SET_USER_NAME",
        payload: username
      })
    }
    authDispatch({
        type: "CLEAR_USER_DATA",
    })
    authDispatch({
        type: "OPEN_AUTH_MODAL",
    })
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={number}
            className="auth-input"
            maxLength="10"
            type="number"
            placeholder="Enter Mobile Number"
            onChange={handleNumberChange}
            required
          />
        </div>
        <div className="flex flex-col lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="EnterPassword"
            type="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button className="button cursor-pointer rounded">Login</button>
        </div>
      </form>
      <div className="cta">
        <button className="btn-test cursor-pointer rounded">
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};
