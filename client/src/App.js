import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";
import Video from "./components/Video.jsx";
import Tutorial from "./components/Tutorial.jsx";
import Welcome from "./components/Welcome.jsx";
import Success from "./components/Success.jsx";
import Messages from "./components/Messages.jsx";
import Speak from "./components/Speak.jsx";
import Write from "./components/Write.jsx";
import Emergency from "./components/Emergency.jsx";
import ReceivedMessage from "./components/ReceivedMessage.jsx";
import MessageSent from "./components/MessageSent.jsx";

function App() {
  const [messageContent, setMessageContent] = React.useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/connect" exact component={() => <Connect />} />
          <Route
            path="/connection-success"
            exact
            component={() => <Success />}
          />
          <Route path="/video" exact component={() => <Video />} />
          <Route path="/tutorial" exact component={() => <Tutorial />} />
          <Route path="/welcome" exact component={() => <Welcome />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/message1" exact component={() => <ReceivedMessage />} />
          <Route path="/speak" exact component={() => <Speak />} />
          <Route path="/success" exact component={() => <Success />} />
          <Route path="/message-sent" exact component={() => <MessageSent />} />
          <Route
            path="/write"
            exact
            component={() => (
              <Write
                messageContent={messageContent}
                setMessageContent={setMessageContent}
              />
            )}
          />
          <Route path="/emergency" exact component={() => <Emergency />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
