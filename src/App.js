//import logo from "./logo.svg";
import "./App.css";
import Capture from "./Capture.png";
import React from "react";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 10px  black", maxWidth: "100vW" }}>
        <h1 className="title red">Nature</h1>
        <br />
        <img src={Capture} alt="Capture" />
        <br />
        <img src="/photo.jpg" alt="photo" />
        <br />
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/d2SNX3bfYKw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
