import { BrowserRouter as Swich, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import "./App.css";
import RegisterCoponent from "./components/Register/RegisterComponent";
import CatalogComponent from "./components/Catalog/CatalogComponent";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import DetailsComponent from "./components/Details/DetailsComponent";
import { useState } from "react";
import UserContext from "./Contexts/UserContext";
function App() {
  const [token, setUserToken] = useState(null);
  return (
    <div id="root">
      <UserContext.Provider value={{ token, setUserToken }}>
        <Swich>
          <Route path="/" exact component={CatalogComponent} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/register" exact component={RegisterCoponent} />
          <Route path="/catalog" exact component={CatalogComponent} />
          <Route path="/settings" exact component={SettingsComponent} />
          <Route path="/details/:id" exact component={DetailsComponent} />
          <Route
            path="/logout"
            exact
            render={({ history }) => {
              setUserToken(null);
              sessionStorage.clear();
              history.push("/login");
            }}
          />
        </Swich>
      </UserContext.Provider>
    </div>
  );
}

export default App;
