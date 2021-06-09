import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
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
      <button type="submit">
        {" "}
        <Link to="/connection-success" className="text-link">
          Connect
        </Link>
      </button>
    </AppContainer>
  );
}

export default Connect;
