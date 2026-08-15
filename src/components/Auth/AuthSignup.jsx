import "./Auth.css";
import { useAuth } from "../../context";
import {validateEmail, validateName, validateNumber, validatePassword} from "../../utils"
import { signupHandler } from "../../services";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;  

export const AuthSignup = () => {
  const { authDispatch, username, number, email, password, confirmPassword } = useAuth();

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

  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("Valid Input");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Email");
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

  const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

    const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      await signupHandler(username, number, email, password);
    }
    authDispatch({
        type: "CLEAR_USER_DATA",
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
            Name <span className="asterisk">*</span>
          </label>
          <input defaultValue={username} className="auth-input" placeholder="Enter Name" onChange={handleNameChange} required />
        </div>
        <div className="flex flex-col lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>
          </label>
          <input
          defaultValue={email}
            className="auth-input"
            placeholder="Enter email"
            type="email"
            onChange={handleEmailChange}
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
            placeholder="Enter Password"
            type="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex flex-col lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>
          </label>
          <input
          defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Re-enter Password"
            type="password"
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div>
          <button className="button cursor-pointer rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};
