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
