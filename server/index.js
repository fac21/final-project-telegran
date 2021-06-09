const { response } = require("express");
const send = require('./api/sendToSlack');
const receive = require('./api/receiveFromSlack');
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

app.post("/api/write-message", (req, res) => {
  const message = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${req.body.message}`,
  };
  send.sendSlackbotStartMsg(message);
  res.redirect("/success");
});

//Fetch messages from Slack
app.get("/api/read-messages", async (req, res) => {
  try {
    const response = await receive.getMessagesFromSlack()
    res.send(response);
  } catch (e) {
    res.status(400).send();
  }
})

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  // send.sendSlackbotStartMsg(
  //   {
  //     channel: `${process.env.SLACK_CHANNEL_ID}`,
  //     text: "The server has started running!"
  //   });
});
