import React, { Component } from "react";
import Nati from "./Nati";
export default class Son extends Component {
  render() {
    return (
      <div>
        <Nati name={this.props.name} />
      </div>
    );
  }
}
