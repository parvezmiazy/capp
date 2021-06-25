import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import { Link } from "react-router-dom";

export default class Page2 extends Component {
  //   constructor({ match }) {
  //     super();
  //     this.state = {
  //       myname: "ParvezAhmed",
  //     };
  //   }

  render() {
    // var para = "/page3/" + this.state.myname;

    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <p>Page 2</p>

          <button>{/* <Link to={para}>Pass my name</Link> */}</button>
        </div>
      );
    }
  }
}
