import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Creator from "./components/create";

class App extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
      isAuth: localStorage.getItem("isAuth"),
    };
  }
  async logout() {
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/logout",
      headers: {
        Authorization: this.state.header,
      },
    };
    await Axios(options);
    await localStorage.clear();
    await localStorage.setItem("isAuth", false);
    this.setState({
      isAuth: localStorage.getItem("isAuth"),
    });
  }
  async login(email, pass) {
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: {
        email: email,
        password: pass,
      },
    };
    const res = await Axios(options);
    await localStorage.setItem("token", res.data.token);
    await localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
    await localStorage.setItem("isAuth", true);
    this.setState({
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
      isAuth: localStorage.getItem("isAuth"),
    });
  }

  render() {
    return (
      <Router>
        <Nav isAuth={this.state.isAuth} logoutFunc={this.logout} />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} isAuth={this.state.isAuth} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                isAuth={this.state.isAuth}
                loginFunc={this.login}
              />
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/create"
            render={(props) => (
              <Creator {...props} isAuth={this.state.isAuth} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
