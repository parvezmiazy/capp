import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {
  Route,
  Link,
  BrowserRouter as Router,
} from "../node_modules/react-router-dom";

const myrouter = (
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </ul>

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(myrouter, document.getElementById("root"));
