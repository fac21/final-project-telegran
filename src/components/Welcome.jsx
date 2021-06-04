import React from "react";
// import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import Nav from "./Navbar.jsx";
import { AppContainer } from "./Container.style";

function Welcome() {
  return (
    <AppContainer>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <Nav />
    </AppContainer>
  );
}

export default Welcome;
