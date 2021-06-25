import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Page3 extends Component {
  constructor({ match }) {
    super();
    this.state = {
      myname: match.params.username,
    };
  }
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <p>Page 3</p>
          <p>{this.state.myname}</p>
        </div>
      );
    }
  }
}
