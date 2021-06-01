### Importing issues in bulk to GH

1. Create csv spreadsheet and list issues under column headings of title, body, labels, status. Multiple labels should be comma separated _without_ a space after the comma.
1. In the directory, `npm install -g github-csv-tools`
1. `githubCsvTools path/file.csv`
1. Follow prompts. It will ask you to input a GitHub token. To obtain this token:

- Go to https://github.com/settings/tokens
- Click "Generate New Token"

Source:

- https://github.com/gavinr/github-csv-tools
- https://docs.gitlab.com/ee/user/project/issues/csv_import.html
- https://scottjjackson.medium.com/how-to-bulk-create-issues-in-github-a278d429b7bf

### Sending messages to Slack from a JS file

1. Make a slackbot app on this page https://api.slack.com/apps?new_app=1 and link it to your Slack workspace.
1. Activate incoming webhooks in the slack app (it gives us an URL, and relates it to a slack channel)
1. Write a POST fetch request to that URL, with message data as JSON, e.g:
    ```
    let testMessage = {
        "text": "This is a test message!"
    }
    ```