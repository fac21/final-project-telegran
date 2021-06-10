# FAC Final Project: Telegran :envelope: 

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

DELETE THIS
![tech-stack](https://i.imgur.com/Iw9D8vT.png)

#### Dependencies
- dotenv - Allows private variables to be added (API)
- nodemon - Restarts the server automatically when you make a change to the code
- MORE

#### Dev Dependencies

- MORE

## Features
What can you do?

- You can TBC
- You can TBC
- You can TBC


## 🏁 Using this project

1. Clone the project, change into the directory and install the dependencies.

   ```bash
   git clone https://github.com/fac21/final-project-telegran.git
   cd final-project-telegran
   npm install
   ```

2. Create a `.env` file for environment variables in your server.

   ```bash
   touch .env
   ```

3. Start the server

   You can start the server on its own with the command:

   ```bash
   npm run server
   ```

   Run the React application on its own with the command:

   ```bash
   npm start
   ```

   Run both applications together with the command:

   ```bash
   npm run dev
   ```

   The React application will run on port 3000 and the server port 3001.

<!-- 2. Run `npm run gap` → this will npm i the three package.jsons in

- client-app/
- server-api/
- Root folder 

Make sure you do `npm start` in the client-app/ and server-api/ folders respectively when running the project. -->


---


<!-- ### REST API Endpoints

Examples of body and example response can be found in the following Postman collection:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/49b550d2bcb9bb2c74a7)

### GET


- GET all customers: `http://localhost:8080/customers/`
- GET all customer coordinates:`http://localhost:8080/customers/coords`


### POST
- POST signup new vendor `http://localhost:8080/vendors/signup`
- POST login vendor `http://localhost:8080/vendors/login`


### Delete
- DELETE route:`http://localhost:8080/routes/:name` -->


---

## 📆 Project Timeline
### 🎨 Week 1: Design 
This week was spent identifying key design heuristics we wanted to incorporate into our prototype and conducting user research. 
<!-- See our [style guide](https://github.com/fac19/week11-where-is-whippy/issues/1) here for a full breakdown. -->

<!-- For an overview of the project's user stories, check out the [User stories](https://github.com/fac19/week11-where-is-whippy/issues/3) here -->

The initial prototype can be viewed here on [Figma](https://www.figma.com/file/IfZ16NjPCNCI6yEGZs6kvG/Untitled?node-id=0%3A1)
<!-- ![figma prototype](https://i.imgur.com/E0INPni.png) -->


Through our initial user research, we learnt that ice cream vendors are not keen to have their location shared constantly with customers, so would like to have full control of how visible they are on the map, and this impacted our final MVP design.



### 🔧 Week 2: First Build Sprint
By the end of the first build sprint, we had accomplished the following:
* Initial set up of PostgresQL database
* Set up Travis CI and Husky as part of initial setup
* Deployment of frontend and backend from a monorepo
* Finalized style guide
* Set up React router for for the front-end to serve different pages


### 🔨 Week 3: Second Build Sprint
By the end of the second build sprint, we were able to :
* Create the heatmap for ice cream vendors to view nearby customers who are interested in icecream
* Set up codecov to monitor test coverage on the project
* Add functionality for customers to let ice cream vendors know they would like ice cream
* Include geolocation api tracking for customers


## Reflections and what next
### 👨‍🏫 Key takeaways
* React router to serve different pages for diferent users
* Using React context to make state management more streamlined in your React app
* Implementing and customising Google Map and Geocoding APIs in React
* How to scope a MVP properly and prototype in Figma
* Most importantly, everyone loves icecream :icecream: 

### ⏳ Additional Features
Unfortunately, there were a few features we were unable to incorporate into the MVP due to time constraints. These included:
* The map customers where they could see their nearest ice cream vendor
* The routes feature for vendors which allows them to upload, edit and store their routes
* Style the heatmap based on the prototype
* Add an emergency exit for users
* No authorization on the API's endpoints
* Minimal frontend tests
