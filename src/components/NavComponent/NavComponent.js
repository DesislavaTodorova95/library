import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../Contexts/UserContext";
import "./NavComponent.css";
import logo from "./static/Exclusion 1.png";
const NavComponent = () => {
  const { token } = useContext(UserContext);
const currentPath = useHistory().location.pathname.toLowerCase()
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div id="nav-container">
      <img className="logoImage" src={logo} alt="logo" />
      <nav className="navList">
        <ul className="uLNav">
          <li className={currentPath.includes('catalog') ? "navl": ''}>
            <Link to="/catalog" className='liItemLib'>
              Library
            </Link>
          </li>
          <li className={currentPath.includes('settings') ? "navl": ''}>
            <Link to="/settings" className='liItemSettings'>
              settings
            </Link>
          </li>
          <li>
            <Link to="/logout" className="liItemLogout">
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavComponent;
