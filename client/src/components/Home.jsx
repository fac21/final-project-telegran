import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";

import { Button } from "./Button.style.js";
import { AppContainer } from "./Container.style";

function Home() {
  return (
    <AppContainer>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <Button type="submit">
        {" "}
        <Link to="/connect">Get Started</Link>
      </Button>
    </AppContainer>
  );
}

export default Home;
