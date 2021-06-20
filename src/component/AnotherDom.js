import React, { Component } from "react";
import reactDom from "react-dom";

export default class AnotherDom extends Component {
  changeImage() {
    var imgID = document.getElementById("imgID");

    reactDom.findDOMNode(imgID).src = "../download.jpg";
  }

  render() {
    return (
      <div>
        <img id="imgID" src="../logo192.png" alt="Logo"></img>
        <br></br>
        <button onClick={this.changeImage}>Change Image</button>
      </div>
    );
  }
}
