import { BrowserRouter as Swich, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import "./App.css";
import RegisterCoponent from "./components/Register/RegisterComponent";
import CatalogComponent from "./components/Catalog/CatalogComponent";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";

function App() {
  return (
    <div id="root">
      <Swich>
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/register" exact component={RegisterCoponent} />
        <Route path="/catalog" exact component={CatalogComponent} />
        <Route path="/settings" exact component={SettingsComponent}/>
      </Swich>
    </div>
  );
}

export default App;
