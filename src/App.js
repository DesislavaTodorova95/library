import { BrowserRouter as Swich, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import "./App.css";
import RegisterCoponent from "./components/Register/RegisterComponent";

function App() {
  return (
    <div id="root">
      <Swich>
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/register" exact component={RegisterCoponent} />
        
      </Swich>
    </div>
  );
}

export default App;
