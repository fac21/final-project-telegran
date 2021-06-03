import React from "react";
import { Link, withRouter } from "react-router-dom";

function Video() {
  return (
    <>
      <h1>Tutorial</h1>
      <div>
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
        <div>
          <button type="submit">
            <Link to="/tutorial">Written Tutorial</Link>
          </button>
          <button type="submit">
            <Link to="/welcome">Skip</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Video;
