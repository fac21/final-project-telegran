import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import Nav from "./Navbar.jsx";

function Welcome() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <Nav />
    </div>
  );
}

export default Welcome;
