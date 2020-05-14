import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {" "}
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}{" "}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
