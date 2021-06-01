import React, { useState } from "react";
import envelope from "../../public/images/envelope.svg";

function Navbar(props) {
    
    return (
        <div className="navbar">
            <a href='#'><img src={envelope} alt="envelope"><div>Messages</div></img></a>
            <a href='#'><div>Write</div></a>
            <a href='#'><div>Emergency</div></a>
        </div>
    );
}

export default Navbar;