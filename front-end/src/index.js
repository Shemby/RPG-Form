import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sheet from "./components/Sheet";
import Logout from "./components/Logout";
import Singup from "./components/Signup";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Singup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
