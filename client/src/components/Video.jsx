import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContainer, CenterContainer } from "./Container.style";
import { Button } from "./Button.style.js";

function Video() {
  return (
    <AppContainer>
      <h1>Tutorial</h1>
      <CenterContainer>
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </CenterContainer>
      <div>
        <Button type="submit">
          <Link to="/tutorial" className="text-link">
            Written Tutorial
          </Link>
        </Button>
        <Button type="submit">
          <Link to="/welcome" className="text-link">
            Skip
          </Link>
        </Button>
      </div>
    </AppContainer>
  );
}

export default Video;
