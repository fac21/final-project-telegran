import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";

function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <button type="submit">
        {" "}
        <Link to="/connect">Get Started</Link>
      </button>
    </div>
  );
}

export default Home;
