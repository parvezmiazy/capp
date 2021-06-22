import React, { Component } from "react";

export default class About extends Component {
  render() {
    const TextStyle = {
      backgroundColor:"silver",
      color:"green",
      margin:"40px",
      padding:"10px"

    }
    return (
      <div>
        {/* <p style={{backgroundColor:"red",color:"green"}}>About</p> */}
        <p style={TextStyle}>About Internal css included</p>
      </div>
    );
  }
}
