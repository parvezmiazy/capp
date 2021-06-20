import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  onChangeHandler = (event) => {
    var newName = event.target.value;
    this.setState({ name: newName });
  };
  render() {
    return (
      <div className="container">
        <form>
          <p>My first form</p>
          <p>{this.state.name}</p>
          <label>Name:</label>
          <div className="form-group">
            <input
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              placeholder="Wht is your name"
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <input
              className="btn btn-primary btn-xs pull-right"
              type="submit"
              value="Submit Now"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
