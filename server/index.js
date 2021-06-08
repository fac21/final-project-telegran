const { response } = require("express");
const send = require('./api/sendToSlack');
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

app.post("/api/slack", (req, res) => {
  const message = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${req.body.message}`,
  };
  send.sendSlackbotStartMsg(message);
  res.redirect("/success");
});

const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(`${process.env.BOT_USER_OAUTH_TOKEN}`);

//Fetching messages from Slack
app.get("/api/read-messages", (req, res) => {
  console.log("Can you see me");
  let channelId = `${process.env.SLACK_CHANNEL_ID}`;

  client.conversations
    .history({
      channel: channelId,
    })
    .then((result) => {
      console.log(result.messages[0]);
      console.log(result.messages[1]);
    })
    .catch((error) => {
      console.log("This is an error");
    });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  let testMessage = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: "The server has started running!",
  };
  send.sendSlackbotStartMsg(
    {
      channel: `${process.env.SLACK_CHANNEL_ID}`,
      text: "The server has started running!"
    });
});

