const { response } = require("express");
// const fetch = require('node-fetch');
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/slack", (request, response) => {
  response.json({ message: "Hello from server!" });
});

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  sendSlackbotStartMsg(testMessage);
});

let testMessage = {
  channel: `${process.env.SLACK_CHANNEL_ID}`,
  text: "The server has started running!",
};

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
