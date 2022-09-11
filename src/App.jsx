import React, { useState } from "react";
import black from "./imgs/black.webp";
import white from "./imgs/white.webp";
import pinkgold from "./imgs/gold.webp";
import green from "./imgs/green.webp";
import "./index.css";

function App() {
  const [activeColor, setActiveColor] = useState("white");
  return (
    <div className="App">
      <div className="colors">
        {activeColor === "white" && (
          <div className="left">
            <img src={white} alt="" />
            <h1>white</h1>
          </div>
        )}
        {activeColor === "pinkgold" && (
          <div className="left">
            <img src={pinkgold} alt="" />
            <h1>pinkgold</h1>
          </div>
        )}
        {activeColor === "black" && (
          <div className="left">
            <img src={black} alt="" />
            <h1>black</h1>
          </div>
        )}
        {activeColor === "green" && (
          <div className="left">
            <img src={green} alt="" />
            <h1>green</h1>
          </div>
        )}
        <div className="right">
          <div
            className={activeColor === "white" ? "activeT option" : "option"}
            onClick={() => setActiveColor("white")}
          >
            <div className="white"></div>
            <p>White</p>
          </div>
          <div
            className={activeColor === "pinkgold" ? "activeT option" : "option"}
            onClick={() => setActiveColor("pinkgold")}
          >
            <div className="pinkgold"></div>
            <p>Pinkgold</p>
          </div>
          <div
            className={activeColor === "black" ? "activeT option" : "option"}
            onClick={() => setActiveColor("black")}
          >
            <div className="black"></div>
            <p>Black</p>
          </div>
          <div
            className={activeColor === "green" ? "activeT option" : "option"}
            onClick={() => setActiveColor("green")}
          >
            <div className="green"></div>
            <p>Green</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
