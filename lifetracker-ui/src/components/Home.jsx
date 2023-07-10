import React from 'react';
import "./Home.css";
import Tile from "../Tile/Tile";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="content">
          <div className="text">
            <h1>LifeTracker</h1>
            <h2>Helping you take back control of your world.</h2>
          </div>
          <div className="image">
            <img src="https://lifetracker.up.railway.app/assets/tracker-2a96bfd0.jpg" alt="home" />
          </div>
        </div>
      </div>
      <div className="tile-container">
        <Tile />
      </div>
    </div>
  );
}