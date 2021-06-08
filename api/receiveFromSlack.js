const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(`${process.env.BOT_USER_OAUTH_TOKEN}`);

const MESSAGES_TO_RETURN = 4;

function getMessagesFromSlack() {
  let channelId = `${process.env.SLACK_CHANNEL_ID}`;
  console.log(channelId, process.env.BOT_USER_OAUTH_TOKEN)

  return client.conversations
    .history({
      channel: channelId,
    })
    .then((result) => {
      return result.messages.slice(0,4) // return last MESSAGES_TO_RETURN messages
    })
    .catch((error) => {
      console.log("Error!", error);
    });
}

module.exports = { getMessagesFromSlack };