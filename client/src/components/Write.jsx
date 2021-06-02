import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
import voice from "../images/voice.svg";
import send from "../images/send.svg";
import profile from "../images/profile.svg";

function Write() {
    return (
        <>
            <button><a href='/messages'>Go back</a></button>
            <div className="messageContainer">
                <div className="messageTo">
                    To: Jo
                     <img className="avatar" src={profile}></img>
                </div>
                <form action='#'>
                    <textarea placeholder="Start typing...">
                    </textarea>
                    <button type="submit">
                        <a href='/success'>
                            <img src={send}></img>
                            Send
                        </a>
                    </button>
                </form>
                <div className="msgButtons">
                    <a href='/speak'>
                        {/* we should change this to be state based rather than page */}
                        <img src={voice}></img>
                        <span>Press here to speak your message </span>
                    </a>
                </div>

            </div>
            <Nav />
        </>    
    )
}

export default Write;
