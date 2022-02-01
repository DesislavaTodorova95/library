import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../Contexts/UserContext";
import "./NavComponent.css";
import logo from "./static/Exclusion 1.png";
const NavComponent = () => {
const {token, setUserToken}= useContext(UserContext);
  const logoutClick=()=>{
setUserToken(null);
sessionStorage.clear();
  }
  return (
    <div id="nav-container">
      <img className="logoImage" src={logo} alt="logo" />
      <nav className="navList">
        <ul className="uLNav">
          <li>
            <Link to="/catalog" className="liItemLib">
              Library
            </Link>
          </li>
          <li>
            <Link to="/settings" className="liItemSettings">
              settings
            </Link>
          </li>
          <li>
            <Link onClick={logoutClick} className="liItemLogout">
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavComponent;
