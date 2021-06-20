import React, { Component } from "react";

export default class OnSubmit extends Component {
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
  onSubmitHandler = () => {
    alert(this.state.username);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
          <p>My On Submit form</p>
          <p>Name is : {this.state.username}</p>
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
