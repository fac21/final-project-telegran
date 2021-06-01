import React from "react";
import Navbar from '../../client/src/components/Navbar';
// import logo from "./logo.png";
import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/slack")
  //     .then((response) => response.json())
  //     .then((data) => setData(data.message));
  // }, []);

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
    </div>
  );
}

export default App;
