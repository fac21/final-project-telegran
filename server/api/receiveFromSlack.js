const { WebClient, LogLevel } = require("@slack/web-api");
const fetch = require("node-fetch");

const client = new WebClient(process.env.BOT_USER_OAUTH_TOKEN);

const MESSAGES_TO_RETURN = 4;

function getMessagesFromSlack() {
  return fetch(`https://slack.com/api/conversations.history?channel=C0234QPSBK7&pretty=1`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      return result.messages.slice(0, MESSAGES_TO_RETURN) // return last MESSAGES_TO_RETURN messages
    })
    .catch((error) => {
      console.log("Error!", error.data.response_metadata);
    });
}

module.exports = { getMessagesFromSlack };