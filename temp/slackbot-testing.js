// HOW TO:
// make slackbot app on this page https://api.slack.com/apps?new_app=1
// activate incoming webhooks in slack app (it gives us an URL, and relates it to a slack channel)
// send POST fetch request to that URL

const fetch = require('node-fetch'); // this will be unnecessary when on the web but is needed for running this file from the command line
const URL = process.env.INCOMING_WEBHOOK_URL;

let testMessage = {
    "text": "This is a test message!"
}

function sendMessage(messageData) {
    fetch(URL, {
    method: "POST",
    headers: {
     "content-type": "application/json"
    },
    body: JSON.stringify(messageData),
    })
    .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response;
    })
    .then((res) => console.log(res.status, res.statusText))
    .catch((error)=>console.error(error));
}

sendMessage(testMessage);