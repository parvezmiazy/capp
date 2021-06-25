import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Mynavigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: "green" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "green" }} to="/page1">
              Page1
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "green" }} to="/page2">
              Page2
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "green" }} to="/page3">
              Page3
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "green" }} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
