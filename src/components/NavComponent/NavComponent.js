import { Link } from "react-router-dom";
import "./NavComponent.css";
import logo from "./static/Exclusion 1.png";
const NavComponent = () => {
  return (
    <div id="nav-container">
      <img className="logoImage" src={logo} alt="logo" />
      <nav className="navList">
        <ul className="uLNav">
          <li>
            <Link to="/cataog" className="liItemLib">
              Library
            </Link>
          </li>
          <li>
            <Link to="/settings" className="liItemSettings">
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
