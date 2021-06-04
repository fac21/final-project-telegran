# Week 11 Presentation

![Draft logo](https://i.imgur.com/GoG8UCe.png)

---

### Roles

- Scrum Facilitator: Chun
- Devops: Chisha
- UX Lead: Jo
- QA: Nafisa

---

### React with a Node server (without using Next.js) - CHISHA :sunglasses: 

https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

---

![](https://i.imgur.com/PVnkNJo.jpg)


---

- Initially, we built our server from scratch 
- Server: ran on localhost/3001 `npm run dev` 
- Client-side: built from scratch locally. - We had to move into the client directory folder locally then run  `npm start` 
- App would open on localhost/3000
- Two ports using two servers 3000 and 3001
- Nested package.jsons 
`npm run all` that runs all the servers at once

---

![](https://media4.giphy.com/media/bC8EUWeuy5OIx6o7ul/200.gif)

---

### Issues we were having 


![](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f687f5aa-d276-45a1-afa5-ee7419a62278/d8gl0kb-e5f61cdb-acec-4f00-a71a-e3c58b09bea9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2ODdmNWFhLWQyNzYtNDVhMS1hZmE1LWVlNzQxOWE2MjI3OFwvZDhnbDBrYi1lNWY2MWNkYi1hY2VjLTRmMDAtYTcxYS1lM2M1OGIwOWJlYTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KszCh6MGGUpPZQBtD6_KCbDkRbwe2wC5S7IsE1h36zE)

---

### Issues:

-  **App not deploying to Heroku properly**
-  **Heroku's production and live stages set up**
- **Issues with CORS (Cross Origin Request Server) (where you cannot pass security and sensitive issues from our Slack API around without using secure methods)**
-  **Confusion of where to install packages in the correct file client (local host) or root (telegran) json.packages**
- **Different Node versions having an impact** 
```
"engines": {
    "node": ">=14.17.0 <15"
  },
  
```

---

### Solution to Issue :bulb: 
![](https://media2.giphy.com/media/5z0cCCGooBQUtejM4v/200.gif)

---

We have now decided to have ==**one package.json.**== We still have two servers (one for react and one for express)  ==**Client: React and Server: Express**== 

- **One package.json**
![](https://i0.wp.com/angularfirst.com/wp-content/uploads/2016/10/npm-visual-studio-package-json-intellisense.gif?w=660)


---

### Styled Components (Chun)

1. npm install styled-components
2. In components dir, create a styled component file, eg: Button.style.js
3. In this file, create all the logic for creating a button, eg:

```
import styled from “styled-components”;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: green;
`
```
4. Make a Container.style.js for overall page styling


Extension for styled components: vscode-styled-components

---

### React-router-dom 

- depency we installed to allows our app to navigate between different components while changing the browser URL

- npm install --save react-router-dom

https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

---

```

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


 <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/connect" exact component={() => <Connect />} />
 ```

     

---

### How we worked: 


**Tuesday:**
 - Setting up the server
 - Testing if we could send messages to Slack
- Started writing some tests

**Wednesday:**
- Deploying to heroku
- Working on the speech to text functionality 
- UI of some of the pages and using react router 
 

**Thursday:**
- Rewritng our repo with just one package.json from an example
- Style compnonents
- Got messages to send to our slack channel

---

### Final Tech Stack

<img src='https://i.imgur.com/67eQOxK.png' height='90px'>

<img src='https://i.imgur.com/GAy7F0j.png' height='90px'>

<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.p2WNjfwUqXHqwuHoTKIKQAHaHa%26pid%3DApi&f=1' height='90px'>

<img src='https://i.imgur.com/7TrfhJH.png' height='90px'>


<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.invA5uJe52Tov4P-ojlFuwDIDI%26pid%3DApi&f=1' height='90px'>

---

### Final Tech Stack... TBC

<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.digifloor.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fairtable.png&f=1&nofb=1' height='100px'> 

:question: 

---

### Our NPM Packages  

- Express
- bodyParser
- **Express pino logger** :pineapple: :tropical_drink:
![](https://i.imgur.com/1XigYpG.png)
- Node-Fetch
- **npm-run-all** :running: 
- nodemon
- **node-env-run**
- styled-components


---

### Features Completed

- **Slack integration** 
    - Write messages to Slack :heavy_check_mark: 
    - Receive messages from Slack :negative_squared_cross_mark: 
    - Emoji React (Send Love) to received messages :negative_squared_cross_mark: 
    - Distributed app (available in multiple Slack workspaces) :negative_squared_cross_mark: 
- **SOS quick message option** :negative_squared_cross_mark: 
- **Speech-to-text writing** :heavy_check_mark: 
- **Simple UI** :heavy_check_mark: 
- **Written and Video tutorials** :negative_squared_cross_mark: 

---

## Demo :sparkles: 

---

### Things Learned :bulb: 

- Add "notes" to Kanban board and then press "convert to issue"

<img src='https://i.imgur.com/nosMzMf.png' height='200px'>
<span><img src='https://i.imgur.com/DUE2LAX.png' height='200px'></span>

---

### Things Learned :bulb: 

- .env file has an EQUALS SIGN BETWEEN THE KEY VALUE PAIRS!! **NOT A COLON**

![](https://i.imgur.com/5ZRHjJ3.png) :heavy_check_mark: 

NOT
![](https://i.imgur.com/Gy1zjEE.png) :negative_squared_cross_mark: 

---

### Milestones

- ![Slack message on server start](https://i.imgur.com/Qetxkl6.png)

---

- ![Speech recognition works](https://i.imgur.com/ZzitmBI.png)

---

![gran sends a message](https://i.imgur.com/4wIZBSf.png)


---

### Challenges (Jo)

- Node versions!! Eventually we did `volta install node@14.17.0` to get us all on the same version.
- Having two package.jsons nested. (NPM package hell!)
- Realising that we have two servers:

![](https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif)

---

![](https://miro.medium.com/max/700/1*__ksb0sP_gUNUSWf_o4YZg.png)

---

### Challenges

- Web tokens expiring because shared publicly (Github)
- Massive merge conflicts from refactoring
- Sending requests via a proxy server
- React's special way of dealing with env variables


<!-- ![](https://i.imgur.com/Ic62jyx.png) -->


<!-- ![](https://media.giphy.com/media/eIUpSyzwGp0YhAMTKr/giphy.gif) -->


<!-- ![](https://i.imgur.com/MGcvyei.png) -->


---

### Error messages (Chun)

- if error message mentions "modules not found", probably need to delete node_modules (`rm -rf node_modules`) and clear cache (`npm cache clear --force`). Then `npm install`. This should work but sometimes also need to delete package-lock.json. Closing and reopening terminal can also help. 

---

### Git Tips (Chun)
If you have changed github repo name, do `git branch --set-upstream-to=origin/main main` to update name locally

`npm run build` to run production version of app. This shows you any errors that may appear during deployment, gives you chance to sort them out before deploying. 

`npm install --package-lock-only` sorts out package-lock conflicts.

Remember: `npm install` each time you pull because node_modules is hidden in gitignore (the reason it's in gitignore is it's too heavy to push and pull it to GH every time). 

---

### Estimates v Actuals (Chun)

https://github.com/fac21/final-project-telegran/projects/1?fullscreen=true

---

### Gantt Chart (Chun)

https://docs.google.com/spreadsheets/d/1BdTd_8NZ0Ap0MPvyR2PvcSAN7FNQeox44xY42ZnEB4A/edit#gid=0

---

![](https://media.giphy.com/media/osjgQPWRx3cac/giphy.gif)
