import React, { useEffect } from "react";
import GameConntrol from "./game_control";
import "./index.css";

let gc: GameConntrol;
export default function GreedySnake() {
  useEffect(() => {
    if (gc === undefined) {
      gc = new GameConntrol();
      console.log("init gc", gc);
    }
  }, []);

  return (
    <div id="main">
      <div id="stage">
        <div id="snake">
          <div></div>
        </div>
        <div id="food">🍔</div>
      </div>
      <div id="score-panel" className="scorefont">
        <div className="scorefont">
          SCORE:<span id="score">0</span>
        </div>
        <div className="scorefont">
          LEVEL:<span id="level">1</span>
        </div>
      </div>
    </div>
  );
}
