import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Singup from "./components/Signup";
import Signup from "./components/Signup";

class App extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      token: localStorage.getItem("token"),
      header: localStorage.getItem("Authorization"),
      isAuthenticated: false,
      redirect: false,
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
    localStorage.clear();
    this.setState({
      isAuthenticated: false,
      redirect: "/login",
    });
  }
  login(email, pass) {
    const options = {
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: {
        email: email,
        password: pass,
      },
    };
    Axios(options).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
      this.setState({
        isAuthenticated: true,
        redirect: "/dashboard",
      });
    });
  }

  render() {
    return (
      <Router>
        <Nav isAuth={this.state.isAuthenticated} />
        <Switch>
          <Route exact path="/" component={Singup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/logout"
            render={(props) => (
              <Logout
                {...props}
                logoutFunc={this.logout}
                redirect={this.state.redirect}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                loginFunc={this.login}
                redirect={this.state.redirect}
              />
            )}
          />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
