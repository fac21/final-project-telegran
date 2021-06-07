const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(`${process.env.BOT_USER_OAUTH_TOKEN}`);

function getMessagesFromSlack() {
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
}

module.exports = { getMessagesFromSlack };