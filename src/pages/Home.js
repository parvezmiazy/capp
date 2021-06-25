import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <h1>Home</h1>
        </div>
      );
    }
  }
}
