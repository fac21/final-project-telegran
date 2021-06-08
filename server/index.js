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
  try {
    console.log("trying!")
    const response = receive.getMessagesFromSlack()
    res.send(response);
  } catch (e) {
    console.log("caught an error in index.js")
    res.status(400).send();
  }
  // let lastTenMsgs = receive.getMessagesFromSlack();
  
  // console.log("in index", lastTenMsgs)
  // res.send(lastTenMsgs);
  // res.redirect("/success");
})

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  // send.sendSlackbotStartMsg(
  //   {
  //     channel: `${process.env.SLACK_CHANNEL_ID}`,
  //     text: "The server has started running!"
  //   });
});

