import React, { Component } from 'react';
import logo from "./logo.png";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Connect from "./components/Connect.jsx";
import Welcome from "./components/Welcome.jsx";
import Success from "./components/Success.jsx";
import Messages from "./components/Messages.jsx";
import Speak from "./components/Speak.jsx";
import Write from "./components/Write.jsx";


function App() {
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
          <Route path="/welcome" exact component={() => <Welcome />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/speak" exact component={() => <Speak />} />
          <Route path="/write" exact component={() => <Write />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

