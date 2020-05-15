import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sheet from "./components/Sheet";

class App extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/sheet" component={Sheet}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
