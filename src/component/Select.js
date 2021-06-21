import React, { Component } from "react";

export default class Select extends Component {
  constructor() {
    super();
    this.state = {
      city1: "Feni",
      city2: "Dhaka",
      city3: "Barisal",
      city4: "Rajshahi",
      show: "",
      auto: "Feni",
    };
  }

  onChangeHandler = (event) => {
    var selectedValue = event.target.value;
    this.setState({ show: selectedValue, auto: selectedValue });
  };

  render() {
    return (
      <div className="container">
        <p>{this.state.show}</p>
        <select
          onChange={this.onChangeHandler}
          className="form-control"
          value={this.state.auto}
        >
          <option>{this.state.city1}</option>
          <option>{this.state.city2}</option>
          <option>{this.state.city3}</option>
          <option>{this.state.city4}</option>
        </select>
      </div>
    );
  }
}
