import React, { Component } from "react";

export default class AnotherForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }
  onChangeHandler = (event) => {
    var myName = event.target.name;
    var myValue = event.target.value;
    this.setState({ [myName]: myValue });
  };

  render() {
    return (
      <div className="container">
        <form>
          <p>My Another form</p>
          <p>{this.state.username}</p>
          <label>Name:</label>
          <div className="form-group">
            <input
              name="username"
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
