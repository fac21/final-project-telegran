import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import { AppContainer } from "./Container.style";

function Success() {
  const { width, height } = useWindowSize();

  return (
    <AppContainer>
      <Confetti width={width} height={height} />
      <h1>
        {" "}
        <Link to="/video">Successfully Connected </Link>{" "}
      </h1>
    </AppContainer>
  );
}

export default Success;
