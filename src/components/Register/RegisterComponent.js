import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import UserContext from "../../Contexts/UserContext";
import "./RegisterComponent.css";
const RegisterCoponent = () => {
  const { token } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);
  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== repass) {
        setError("Passwords don't match!");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const responseMessage = await axios
        .post(
          "https://books-library-dev.herokuapp.com/api/user/register",
          { username, password },
          config
        )
        .catch((error) => {
          setError(error.response.data.error);
          throw new Error(error.response.data.error);
        });
      console.log(responseMessage.data.message);
      setMessage(responseMessage.data.message);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  if (token || message) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="registerDiv">
      <form id="registerForm" onSubmit={registerSubmit}>
        <div className="logoImgDivReg"></div>
        <p className="headWellcome">Welcome Back to the best book database!</p>
        <p className="headCreateProfile">Create your profile</p>

        <label className="labelEmailReg" htmlFor="email">
          Email
        </label>
        <div className="emailInput">
          <input
            className="inpRe inpEmailReg"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="email"
          ></input>
        </div>
        <label className="labelPasswordReg" htmlFor="password">
          Password
        </label>
        <div className="passwordInput">
          <input
            className="inpRe inpPassReg"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
          />
        </div>
        <label className="labelRePassReg" htmlFor="rePass">
          Confirm Password
        </label>
        <div className="rePasswordInput">
          <input
            className="inpRe inpRePass"
            type="password"
            onChange={(e) => {
              setRepass(e.target.value);
            }}
            value={repass}
            name="rePass"
          />
        </div>
        <button type="submit" form="registerForm" className="regBtn">
          <p className="regButnParagraph">Sign Up</p>
        </button>
        <div className="redirectToLoginDiv">
          <p className="linkToLogin">You dont have an account?</p>
          <Link className="logLink" to="/login">
            Log in here
          </Link>
        </div>
        <div className={error ? "showError errorDiv" : "hiddeErrorDiv"}>
          <p>{error}</p>
        </div>
      </form>

      <div className="regImageDiv" />
    </div>
  );
};
export default RegisterCoponent;
