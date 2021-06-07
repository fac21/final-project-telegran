import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Navbar.jsx";
const fetch = require("node-fetch");

function Messages() {
  //Receive message from slack then store in database so we can retrieve anytime
  function retrievedMessages(event) {
    fetch("/api/read-messages", {})
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .catch((error) => console.error("Oops message not received!", error));
  }

  return (
    <>
      <button onClick={retrievedMessages}>Button</button>
      <Nav />;
    </>
  );
}

export default Messages;

//  // Store conversation history
// let conversationHistory;
// // ID of channel you watch to fetch the history for
// let channelId = SLACK_CHANNEL_ID;

// try {
//   // Call the conversations.history method using WebClient
//   const result = await client.conversations.history({
//     channel: channelId
//   });
//   conversationHistory = result.messages;
//   // Print results
//   console.log(conversationHistory.length + " messages found in " + channelId);
// }
// catch (error) {
//   console.error(error);
// }
