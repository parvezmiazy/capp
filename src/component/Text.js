import React, { Component } from "react";

export default class Text extends Component {
  constructor() {
    super();

    this.state = {
      desc: "",
      userInput: "",
    };
  }

  onChangeHandler = (event) => {
    var mytext = event.target.value;
    this.setState({ userInput: mytext });
  };

  render() {
    return (
      <div className="container">
        <textarea
          placeholder="Your Message"
          onChange={this.onChangeHandler}
          className="form-control"
        ></textarea>
        <br></br>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}
