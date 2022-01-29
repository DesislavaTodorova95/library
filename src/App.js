import { BrowserRouter as Swich, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import "./App.css";

function App() {
  return (
    <div id="root">
      <Swich>
        <Route path="/login" exact component={LoginComponent} />
      </Swich>
    </div>
  );
}

export default App;
