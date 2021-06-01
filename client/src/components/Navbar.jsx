import React, { useState } from "react";
import envelope from "../images/envelope.svg";

function Navbar(props) {
    
    return (
        <div className="navbar">
            <a href='#'>
                <img src={envelope} alt="envelope"></img>
                <div>Messages</div>
            </a>
            <a href='#'><div>Write</div></a>
            <a href='#'><div>Emergency</div></a>
        </div>
    );
}

export default Navbar;