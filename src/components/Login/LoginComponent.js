import "./LoginComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext, useEffect } from "react/cjs/react.development";
import UserContext from "../../Contexts/UserContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setUserToken } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const tokenResponse = await axios
        .post(
          "https://books-library-dev.herokuapp.com/api/user/login",
          { username, password },
          config
        )
        .catch((error) => {
          console.log(error.response.data.error);
          setError(error.response.data.error);
          throw new Error(error.response.data.error);
        });
      if (tokenResponse) {
        sessionStorage.setItem("session-token", tokenResponse.data.token);
        setUserToken(sessionStorage.getItem("session-token"));
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  if (token) {
    return <Redirect to="/catalog" />;
  } else {
    return (<>
      <div className="logoImgDivHid"></div>
      <div className="loginDiv">
        <form id="LoginForm" onSubmit={loginSubmit}>
          <div className="logoImgDiv"></div>
          <h3 className="headWellcomeLogin">Welcome Back!</h3>
          <label className="labelEmail" htmlFor="email">
            Email
          </label>
          <div className="emailInput">
            <input
              className="inp inpEmail"
              type="text"
              name="email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            ></input>
          </div>
          <label className="labelPassword" htmlFor="password">
            Password
          </label>
          <div className="passwordInput">
            <input
              className={
                isVisible ? "inp inpPass visibleIcon" : "inp inpPass hidden"
              }
              type={isVisible ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <p
              className="revealPassword"
              onClick={(e) => {
                e.preventDefault();
                if (isVisible) {
                  setIsVisible(false);
                } else {
                  setIsVisible(true);
                }
              }}
            >
              Recover Password
            </p>
          </div>
          <button type="submit" form="LoginForm" className="loginBtn">
            <p className="logButnParagraph">log in</p>
          </button>
          <div className="redirectDiv">
            <p className="linkToRegister">You dont have an account?</p>
            <Link className="regLink" to="/register">
              Sign up here
            </Link>
          </div>
          <div className={error ? "showError errorDiv" : "hiddeErrorDiv"}>
            <p>{error}</p>
          </div>
        </form>
        <div className="loginImageDiv" />
      </div></>
    );
  }
};
export default LoginComponent;
