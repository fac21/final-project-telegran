const { response } = require("express");
const fetch = require("node-fetch");
// const dotenv = require("dotenv");
// const path = require("path");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// dotenv.config();

// app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.get("/slack", (request, response) => {
//   response.json({ message: "Hello from server!" });
// });

// app.get("*", (request, response) => {
//   response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

app.post("/api/slack", (req, res) => {
  const message = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${req.body.message}`,
  };
  console.log("message", message);
  sendSlackbotStartMsg(message);
  res.redirect("/success");
});

app.listen(3001, () => {
  console.log("Express server is running on localhost:3001");
  sendSlackbotStartMsg(testMessage);
});

let apiMessage = {
  channel: `${process.env.SLACK_CHANNEL_ID}`,
  text: "api route worked",
};

let testMessage = {
  channel: `${process.env.SLACK_CHANNEL_ID}`,
  text: "The server has started running!",
};

//Sending message to Slack
function sendSlackbotStartMsg(messageData) {
  fetch(`${process.env.INCOMING_WEBHOOK_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
    },
    body: JSON.stringify(messageData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response;
    })
    .then((res) => console.log(res.status, res.statusText))
    .catch((error) => console.error(error));
}

const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(`${process.env.BOT_USER_OAUTH_TOKEN}`);

//Fetching messages from Slack
app.get("/api/read-messages", (req, res) => {
  let conversationHistory;
  let channelId = `${process.env.SLACK_CHANNEL_ID}`;

  fetch(
    client.conversations.history({
      channel: channelId,
    })
  )
    .then((result) => {
      conversationHistory = result.messages;
      console.log(
        conversationHistory.length + " messages found in " + channelId
      );
    })
    .catch((error) => console.error("oops", error));

  res.redirect("/messages");
});

//   fetch(`${process.env.INCOMING_WEBHOOK_URL}`, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
//     },
//     body: JSON.stringify(messageData),
//   })
//     .then((response) => {
//       if (!response.ok) throw new Error(response.status);
//       return response;
//     })
//     .then((res) => console.log(res.status, res.statusText))
//     .catch((error) => console.error(error));
//   res.redirect("/messages");
// });
