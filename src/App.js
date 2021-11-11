import logo from "./logo.svg";
import "./App.css";
//import { Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import ClientPage from "./components/ClientPage";
import { browserHistory, Router, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/clientpage" component={ClientPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
