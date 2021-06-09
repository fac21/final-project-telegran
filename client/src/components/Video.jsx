import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContainer } from "./Container.style";

function Video() {
  return (
    <AppContainer>
      <h1>Tutorial</h1>
      <div>
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
        <div>
          <button type="submit">
            <Link to="/tutorial" className="text-link">
              Written Tutorial
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

export default Video;
