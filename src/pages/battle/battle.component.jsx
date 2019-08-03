import React from "react";

import Instructions from "../../components/instructions/instructions.component";
import Players from "../../components/players/players.component";

// {import "./battle.styles.scss";}

export default class Battle extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <Players />
      </div>
    );
  }
}
