import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";

function Connect() {
  return (
    <div>
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
        <Link to="/connection-success">Connect</Link>
      </button>
    </div>
  );
}

export default Connect;
