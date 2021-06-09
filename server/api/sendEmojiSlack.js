const fetch = require("node-fetch");

function sendEmojiSlack(emoji) {
  console.log("in sendSlackMessage", `${process.env.INCOMING_WEBHOOK_URL}`);
  fetch(`${process.env.INCOMING_WEBHOOK_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.BOT_USER_OAUTH_TOKEN,
    },
    body: JSON.stringify(emoji),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response;
    })
    .then((res) => console.log(res.status, res.statusText))
    .catch((error) => console.error(error));
}

module.exports = { sendEmojiSlack };
