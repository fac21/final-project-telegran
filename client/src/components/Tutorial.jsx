import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContainer } from "./Container.style";

function Tutorial() {
  return (
    <AppContainer>
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
            <Link to="/video" className="text-link">
              Video Tutorial
            </Link>
          </button>
          <button type="submit">
            <Link to="/welcome" className="text-link">
              Skip
            </Link>
          </button>
        </div>
      </div>
    </AppContainer>
  );
}

export default Tutorial;
