import React, { Component } from "react";

class Condition1 extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
    };
  }
  render() {
    if (this.state.login === true) {
      return <button>Login Button</button>;
    } else {
      return <button>Logout Button</button>;
    }
  }
}

export default Condition1;
