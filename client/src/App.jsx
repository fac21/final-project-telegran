import React from "react";

import Navbar from '../../client/src/components/Navbar';
// import logo from "./logo.png";
import "./App.css";

// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";


function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} alt="logo" /> */}
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <button type="submit">
          {" "}
          <a href="/connect">Get Started</a>
        </button>
      </header>
      <Navbar/>

      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/connect" exact component={() => <Connect />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
