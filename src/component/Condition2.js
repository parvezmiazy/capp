import React, { Component } from "react";

class Condition2 extends Component {
  constructor() {
    super();

    this.state = {
      login: true,
    };
  }

  render() {
    return this.state.login ? <button>First</button> : <button>Second</button>;
  }
}

export default Condition2;
