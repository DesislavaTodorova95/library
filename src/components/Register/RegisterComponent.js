import { Link } from "react-router-dom";
import "./RegisterComponent.css";

const RegisterCoponent = () => {
  return (
    <div className="registerDiv">
      <form id="registerForm">
        <div className="logoImgDivReg"></div>
        <p className="headWellcome">Welcome Back to the best book database!</p>
        <p className="headCreateProfile">Create your profile</p>

        <label className="labelEmailReg" htmlFor="email">
          Email
        </label>
        <div className="emailInput">
          <input className="inp inpEmailReg" type="text" name="email"></input>
        </div>
        <label className="labelPasswordReg" htmlFor="password">
          Password
        </label>
        <div className="passwordInput">
          <input className="inp inpPassReg" type="password" name="password" />
        </div>
        <label className="labelRePassReg" htmlFor="rePass">
          Confirm Password
        </label>
        <div className="rePasswordInput">
          <input className="inp inpRePass" type="password" name="rePass" />
        </div>
        <button type="submit" form="LoginForm" className="regBtn">
          <p className="regButnParagraph">Sign Up</p>
        </button>
        <div className="redirectToLoginDiv">
          <p className="linkToRegister">You dont have an account?</p>
          <Link className="regLink" to="/login">
            Log in here
          </Link>
        </div>
      </form>

      <div className="loginImageDiv" />
    </div>
  );
};
export default RegisterCoponent;
