import logo from "./blossom-google.png";
import Confetti from "react-dom-confetti";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [dataLoaded, setdataLoaded] = useState(false);

  const config = {
    angle: "141",
    spread: 360,
    startVelocity: 40,
    elementCount: 200,
    duration: "10000",
    stagger: "35",
    with: "200px",
    height: "300px",
    perspective: "1000px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  useEffect(() => {
    setTimeout(setdataLoaded(true), 3000);
  }, []);

  return (
    <>
      <Confetti active={dataLoaded} config={config} />
      <div className="App">
        <header className="App-header">
          <p className="title">!Feliz cumpleaños 23!</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="title">Patty🤍</p>
        </header>
      </div>
    </>
  );
}

export default App;
