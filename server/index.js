const { response } = require("express");
const send = require('../api/sendToSlack');
const receive = require('../api/receiveFromSlack');
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

//Fetching messages from Slack
app.get("/api/read-messages", (req, res) => {
  console.log("Can you see me");
  receive.getMessagesFromSlack();
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

