import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import UserContext from "../../Contexts/UserContext";
import "./RegisterComponent.css";
const RegisterCoponent = () => {
  const { token } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [message, setMessage] = useState(null);
 const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== repass) {
        throw new Error("Passwords don't match!");
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
          console.log(error);
        });
 console.log(responseMessage.data.message);
      setMessage(responseMessage.data.message);
    } catch (error) {
      throw new Error(error);
    }
  };
  if (token || message) {
    return <Redirect to="/catalog" />;
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
            className="inp inpEmailReg"
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
            className="inp inpPassReg"
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
            className="inp inpRePass"
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
