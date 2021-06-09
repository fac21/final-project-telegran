// import React from "react";
// import cancel from "../images/cancelcross.svg";
// import { Link, withRouter } from "react-router-dom";
// import Nav from "./Navbar.jsx";
// import { EmergencyContainer } from "./Emergency.style";

// function Emergency() {
//   return (
//     <EmergencyContainer>
//       <div>
//         <p>Sending SOS in 10 seconds</p>
//         <img src={cancel} alt="logo" />
//         <button type="submit">
//           {" "}
//           <Link to="/welcome">Cancel SOS Call</Link>
//         </button>
//       </div>
//       <Nav />
//     </EmergencyContainer>
//   );
// }

// export default Emergency;

import React, { useState } from "react";
import envelope from "../images/envelope.svg";
import sos from "../images/sos.svg";
import write from "../images/write.svg";
import "../global.css";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav">
      <Link to="/messages" className="text-link">
        <img src={envelope} alt="envelope" className="icon"></img>
        <div>Messages</div>
      </Link>
      <Link to="/write" className="text-link">
        <img src={write} alt="write" className="icon"></img>
        <div>Write</div>
      </Link>
      <Link to="/emergency" className="text-link">
        <img src={sos} alt="emergency" className="icon"></img>
        <div>Emergency</div>
      </Link>
    </div>
  );
}

export default Navbar;
