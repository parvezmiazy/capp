import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();

    this.state = {
      name: "Parvez",
      age: 26,
    };
  }

  ChangeName(e) {
    this.setState({ name: e });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <br />
        <p>{this.state.age}</p>
        <button onClick={this.ChangeName.bind(this, "Hasan")}>
          ChangeName
        </button>
      </div>
    );
  }
}
