import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContainer } from "./Container.style";
import { Button } from "./Button.style.js";

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
          <Button>
            <Link to="/video" className="text-link">
              Video Tutorial
            </Link>
          </Button>
          <Button type="submit">
            <Link to="/welcome" className="text-link">
              Skip
            </Link>
          </Button>
        </div>
      </div>
    </AppContainer>
  );
}

export default Tutorial;
