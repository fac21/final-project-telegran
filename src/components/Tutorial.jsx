import React from "react";
import { Link, withRouter } from "react-router-dom";

function Tutorial() {
  return (
    <>
      <h1>Tutorial</h1>
      <div>
        <ol>
          <li>text</li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
          <li>text</li>
        </ol>
        <div>
          <button type="submit">
            <Link to="/video">Video Tutorial</Link>
          </button>
          <button type="submit">
            <Link to="/welcome">Skip</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
