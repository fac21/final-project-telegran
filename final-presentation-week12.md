# Final Project Presentation

## Build Sprint 2

---

## Team

- [Chisha](https://github.com/NewCoderCA) - DevOps / Developer :desktop_computer: 
- [Jo](https://github.com/jamdelion) - User Experience / Developer 🖌️
- [Nafisa](https://github.com/nafisa20) - Quality Assurance / Developer :heavy_check_mark: 
- [Chun](https://github.com/chunzg) - Scrum Facilitator / Developer :clipboard: 

---


## FAC Final Project: TeleGran :older_adult:

![telegran.netlify.app/](https://i.imgur.com/GoG8UCe.png)


---

## Project Overview - 

- TeleGran was created to support elderly people who struggle with the UI of traditional messaging platforms.

:sparkles: :love_letter: 

- It's a full stack web application built in React that serves message data from a Slack workspace, using a RESTful API that is built in Express.

---

## Original Design

![Figma](https://i.imgur.com/7QHYoQR.png)


---

## What We've Achieved - Chun

https://docs.google.com/spreadsheets/d/1BdTd_8NZ0Ap0MPvyR2PvcSAN7FNQeox44xY42ZnEB4A/edit#gid=0

---

### 🔧 Week 2: First Build Sprint
By the end of the first build sprint, we had accomplished the following:
* Initial set up of filebase using React
* Wrote UI tests using Cypress
* Set up React router for for the front-end to serve different pages
* Proxy requests from React application to server when running locally.
* Able to write messages to Slack from our app.
* Implement speech-to-text functionality

---

### 🔨 Week 3: Second Build Sprint
By the end of the second build sprint, we were able to :
* Deploy frontend and backend from a monorepo
* Use Styled Components for CSS across the app
* Retrieve messages from Slack using our API endpoint
* Send messages to Slack that have been written using the speech-to-text function.


---

## Sprint Velocity

Estimates + Actuals

64 v 135

https://github.com/fac21/final-project-telegran/projects/1

---

### RECAP SPRINT 1 STACK - CHISHA 

Initial thoughts: Next.Js vs REACT 

![](https://i.imgur.com/RHXQc56.png)


---

Final thoughts: REACT with Node.js 
![](https://revelry.co/wp-content/uploads/2019/05/react-native-UX-design.gif)

---

## Final Tech Stack

![tech-stack](https://i.imgur.com/5xZBiy6.png)

---

### Dependencies
**Client side:**
- **@react-hook/window-size** - for the confetti :tada: 
- **node-fetch** - for fetching from our API routes
- **react**-**confetti** - for the success page :balloon: 
- **react-router-dom** - for changing the URL for different pages 
- **react-speech-recognition** - for the speech-to-text :speech_balloon: 
- **styled-components** :nail_care: 

---

### Dependencies

**Server side:**
- **dotenv** - Allows private variables to be added (API)
- **nodemon** - Restarts the server automatically when you make a change to the code
- **express** - Our server is written in node

---

![](https://developers.giphy.com/branch/master/static/api-c99e353f761d318322c853c03ebcf21b.gif)

---

### REST API Endpoints
### GET

- We created a GET to retrieve messages from Slack using: ==`http://localhost:3001/api/read-messages`==

---

![](https://images.wondershare.com/filmora/article-images/slack-gif-commands.gif)

---

### POST
- We created a POST to send new messages to Slack using: ==`http://localhost:3001/api/write-message`==
==`http://localhost:3001/api/speak-message`==

---

## Features (Jo)
What can you do?

- You can send a message to a Slack channel ✍️
- You can send an emergency message to a Slack channel 🆘
- You can view the last few messages sent to a Slack channel 👀

---

## Demo


---


### ⏳ Additional Features - Chun
There were a few features we were unable to incorporate into the MVP due to time constraints.
* Make the SOS message customizable.
* Upload a profile picture, or fetch the avatar image from Slack
* Read content of an individual message, including the "Send Love" feature.

---

### ⏳ Additional Features
* Receive and store the user's Slack workspace ID / authentication. 
* Video tutorial
* More slack channels associated with different users
* Be able to send audio/voice messages


---


## CHALLENGES - NAFISA 


## 🏫 :key: Key Learnings
* React router to serve different pages for diferent users
* A thorough understanding of using package.json, .env and how to alleviate nested package hell!
* Implementing and customising Slack APIs in React
* How to scope an MVP properly and prototype in Figma

---

## Code Learnings :pencil: 

- Don't do response.json twice in a fetch  (Body consumed error)
![](https://i.imgur.com/E5VCWfS.png)




---


<Redirect to="sfsdf"> --> return this in form handleSubmit function, rather than have a button wrapped in a <Link>

---

We need CORS redirect info in our header to allow requests to come from the same origin
![](https://i.imgur.com/eRRKURJ.png)

---


.ENV needed for both client AND server 

---

## Challenges

 - Node versions- we did `volta install node@14.17.0` to get us all on the same version
 - we were on different npm versions so had to install npm i react-is because we were getting this error 
 ![](https://i.imgur.com/uxbwKcn.png)

 - Different npm versions :confounded: 
 
 ---
 
 
## Challenges
 
- make sure your npm packages are installed in the right place
- Having two package.jsons- then one - then two
- Sending via a proxy server
- Built-in linting that comes with the create react app caused errors
- Sending speech to text message to slack, it sends twice right now :shrug: 
- testing api calls



---

# Thanks!! 

Thanks to our project mentor @Charlie La Fosse!! :star: 
Massive shout out to Oli too 🧙

![](https://media.giphy.com/media/edLKLYMlNFPJC/giphy.gif)
