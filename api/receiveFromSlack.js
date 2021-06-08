const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(`${process.env.BOT_USER_OAUTH_TOKEN}`);

function getMessagesFromSlack() {
  let channelId = `${process.env.SLACK_CHANNEL_ID}`;
  console.log(channelId, process.env.BOT_USER_OAUTH_TOKEN)

  return client.conversations
    .history({
      channel: channelId,
    })
    .then((result) => {
      // console.log("there is a result")
      // console.log("Result: ", result)
      // console.log(result.messages[0]);
      // console.log(result.messages.slice(0, 10));
      // console.log("about to return")
      return result.messages.slice(0,1) // return last 10 messages
    })
    .catch((error) => {
      console.log("Error!", error);
    });
}

module.exports = { getMessagesFromSlack };