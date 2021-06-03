import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import { Button } from "./Button.style.js";
import { AppContainer } from "./Container.style";

function Connect() {
  return (
    <AppContainer>
      <header>
        <img src={logo} alt="logo" />
        {/* <p>{!data ? "Loading..." : data}</p> */}
      </header>
      <h1>Connect to Slack Workspace</h1>
      <form>
        <label>Workspace ID:</label>
        <input></input>
      </form>
      <Button type="submit">
        {" "}
        <Link to="/connection-success">Connect</Link>
      </Button>
    </AppContainer>
  );
}

export default Connect;
