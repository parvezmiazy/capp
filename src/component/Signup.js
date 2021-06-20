import React, { Component } from "react";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: "",
      mobile: "",
    };
  }
  onChangeHandler = (event) => {
    var inputName = event.target.name;
    var inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };
  onSubmitHandler = () => {
    alert(this.state.username);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
          <p>My Signup form</p>
          <p>First Name is : {this.state.fName}</p>
          <p>LastName is : {this.state.lName}</p>
          <p>Email is : {this.state.email}</p>
          <p>Mobile is : {this.state.mobile}</p>

          <div className="form-group">
            <label>First Name:</label>
            <input
              name="fName"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              placeholder="First name"
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              name="lName"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              placeholder="Last name"
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Email:</label>
            <input
              name="email"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              placeholder="Email"
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              name="mobile"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              placeholder="Mobile"
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
