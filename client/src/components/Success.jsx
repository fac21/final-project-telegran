import React from "react";
import { Link, withRouter } from "react-router-dom";

function Success() {
  return (
    <div>
      <h1>
        {" "}
        <Link to="/video">Successfully Connected </Link>
      </h1>
    </div>
  );
}

export default Success;
