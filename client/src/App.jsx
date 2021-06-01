import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";

function App() {
  return (
    <div className="App">
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
