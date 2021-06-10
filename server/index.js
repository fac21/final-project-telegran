const dotenv = require("dotenv");
dotenv.config();
const { response } = require("express");
const send = require("./api/sendToSlack");
const receive = require("./api/receiveFromSlack");
const sendEmoji = require("./api/sendEmojiSlack");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Server is Running!");
});


app.post("/api/write-message", (req, res) => {
  console.log("in app.post write");
  const message = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${req.body.message}`,
  };
  send.sendSlackbotStartMsg(message);
  res.redirect("/success");
});

app.post("/api/add-emoji", (req, res) => {
  const emoji = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    name: `thumbsup`,
  };
  sendEmoji.sendEmojiSlack(emoji);
  res.redirect("/success");
});

//Fetch messages from Slack
app.get("/api/read-messages", async (req, res) => {
  try {
    const response = await receive.getMessagesFromSlack();
    res.send(response);
  } catch (e) {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  // send.sendSlackbotStartMsg(
  //   {
  //     channel: `${process.env.SLACK_CHANNEL_ID}`,
  //     text: "The server has started running!"
  //   });
});


