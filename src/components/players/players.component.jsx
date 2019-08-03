import React from "react";

import PlayersInput from "../players-input/players-input.component";
import "./players.styles.scss";

const Players = () => (
  <div className="players-container">
    <h1>Players</h1>
    <div className="players">
      <PlayersInput label={"Player 1"} onSubmit={value => console.log(value)} />
      <PlayersInput label={"Player 2"} onSubmit={value => console.log(value)} />
    </div>
  </div>
);

export default Players;
