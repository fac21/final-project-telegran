import React from "react";
// import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import Nav from "./Navbar.jsx";
import { NavContainer } from "./Nav.style";
import { AppContainer } from "./Container.style";

function Welcome() {
  return (
    <AppContainer>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <NavContainer>
        <Nav />
      </NavContainer>
    </AppContainer>
  );
}

export default Welcome;
