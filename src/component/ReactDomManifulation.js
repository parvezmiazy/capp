import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ReactDomManifulation extends Component {
  constructor() {
    super();

    this.state = {
      name: "Parvez From State",
    };
  }

  myFun() {
    var container = document.getElementById("myID");
    var element = <h2>My Name is Rain I am from react dom</h2>;
    var callback = function () {
      alert("Hi I am callback");
    };

    ReactDOM.render(element, container, callback);
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.myFun}>ChangeName</button>
        <h1 id="myID">My name is parvez</h1>
      </div>
    );
  }
}
