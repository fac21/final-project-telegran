# FAC Final Project: Telegran :envelope: 

![](https://i.imgur.com/GoG8UCe.png)

## Project Overview

An app created to connect families with their older relatives via Slack. TeleGran was created to support elderly people who struggle with the UI of traditional messaging platforms.

TeleGran is a full stack web application built in React that serves message data from a Slack workspace, using a RESTful API that is built in Express.

## Team

- [Chisha](https://github.com/NewCoderCA) - DevOps / Developer :desktop_computer: 
- [Jo](https://github.com/jamdelion) - User Experience / Developer 🖌️
- [Nafisa](https://github.com/nafisa20) - Quality Assurance / Developer :heavy_check_mark: 
- [Chun](https://github.com/chunzg) - Scrum Facilitator / Developer :clipboard: 

## Contents
- [Project overview](#Project-overview)
- [The team](#The-team)
- [Tech Stack](#Tech-Stack)
- [Features](#Features)
- [🏁 Using this project](#🏁-Using-this-project)
	- [Database setup](#Database-setup)
	- [REST API Endpoints](#REST-API-Endpoints)
- [📆 Project Timeline](#📆-Project-Timeline)
- [Reflections and What Next](#Reflections-and-what-next)
- [👨‍🏫 Key takeaways](#👨‍🏫-Key-takeaways)
- [⏳ Additional Features](#⏳-Additional-Features)

## Tech Stack

![tech-stack](https://i.imgur.com/5xZBiy6.png)

#### Dependencies
**Client side:**
- @react-hook/window-size
- node-fetch
- react
- react-confetti
- react-router-dom
- react-dom
- react-speech-recognition
- styled-components

**Server side:**
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- express

## Features
What can you do?

- You can send a message to a Slack channel ✍️
- You can send an emergency message to a Slack channel 🆘
- You can view the last few messages sent to a Slack channel 👀


## 🏁 Using this project

1. Clone the project, change into the directory and install the dependencies.

   ```bash
   git clone https://github.com/fac21/final-project-telegran.git
   cd final-project-telegran
   npm install
   cd client
   npm install
   cd ../server
   npm install
   cd ..
   ```
   
2. Create `.env` files for environment variables in your client and server folders.

   ```bash
   touch ./server/.env
   touch ./client/.env
   ```

3. The .env files should contain the following:

   ```bash
   // server/.env
	INCOMING_WEBHOOK_URL=your_webhook_url
	BOT_USER_OAUTH_TOKEN=your_bot_user_oauth_token
	SLACK_CHANNEL_ID=your_channel_id
	
   // client/.env
	REACT_APP_API_URL='http://localhost:3001'
   ```
- To create your webhook URL: https://api.slack.com/messaging/webhooks#create_a_webhook

- To get your bot token, find your app at https://api.slack.com/apps, navigate to "OAuth & Permissions" and copy the bot token from the "OAuth Tokens for Your Workspace" section·

- To get your Slack channel ID, go to Slack, right click on the channel name in the left-hand navigation pane and click "copy link". The link will be in the form https://<workspace-name>.slack.com/archives/<channel_id>.


 

3. Start the servers

   Open a new terminal, enter the server folder and start the server on its own with the command:

   ```bash
   npm start
   ```

   Open another terminal, enter the client folder and start the React application on its own with the command:

   ```bash
   npm start
   ```

   The React application will run on port 3000 and the server port 3001.
	
   Make sure you do `npm start` in the client-app/ and server-api/ folders respectively when running the project. 


---

### REST API Endpoints


### GET

- GET last four messages from Slack: `http://localhost:3001/api/read-messages`

### POST
- POST new message to Slack `http://localhost:3001/api/write-message`
- POST emoji to Slack `http://localhost:3001/api/add-emoji`

---

## 📆 Project Timeline
### 🎨 Week 1: Design 
This week was spent identifying key design heuristics we wanted to incorporate into our prototype and conducting user research. 
<!-- See our [style guide](https://github.com/fac19/week11-where-is-whippy/issues/1) here for a full breakdown. -->

<!-- For an overview of the project's user stories, check out the [User stories](https://github.com/fac19/week11-where-is-whippy/issues/3) here -->

The initial prototype can be viewed here on [Figma](https://www.figma.com/file/IfZ16NjPCNCI6yEGZs6kvG/Untitled?node-id=0%3A1)
![figma prototype](https://i.imgur.com/7QHYoQR.png)

Through our initial user research, a lot of our assumptions were challenged. For example, we learned that the SOS symbol is not as universal as we first thought, so we made sure that the navigation icons had the written version underneath too. 


### 🔧 Week 2: First Build Sprint
By the end of the first build sprint, we had accomplished the following:
* Initial set up of filebase using React
* Wrote UI tests using Cypress
* Set up React router for for the front-end to serve different pages
* Proxy requests from React application to server when running locally.
* Able to write messages to Slack from our app.
* Implement speech-to-text functionality


### 🔨 Week 3: Second Build Sprint
By the end of the second build sprint, we were able to :
* Deploy frontend and backend from a monorepo
* Use Styled Components for CSS across the app
* Retrieve messages from Slack using our API endpoint
* Send messages to Slack that have been written using the speech-to-text function.


## Reflections and what next
### 👨‍🏫 Key Learnings
* React router to serve different pages for diferent users
* A thorough understanding of using package.json, .env and how to alleviate nested package hell!
* Implementing and customising Slack APIs in React
* How to scope an MVP properly and prototype in Figma

### ⏳ Additional Features
There were a few features we were unable to incorporate into the MVP due to time constraints. These included:
* Make the SOS message customizable.
* Upload a profile picture, or fetch the avatar image from Slack
* Read content of an individual message, including the "Send Love" feature.
* Receive and store the user's Slack workspace ID
* Video tutorial
