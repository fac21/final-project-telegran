const { response } = require("express");
const send = require('../api/sendToSlack');
// const dotenv = require("dotenv");
// const path = require("path");
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
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

app.post('/api/slack', (req, res) => {
  const message = {
    channel: `${process.env.SLACK_CHANNEL_ID}`,
    text: `${req.body.message}`,
  };
  // console.log("message", message);
  send.sendSlackbotStartMsg(message);
  res.redirect("/success");
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