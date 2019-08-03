import React from "react";

import Instructions from "../../components/instructions/instructions.component";
import Players from "../../components/players/players.component";

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
        <Players />
      </React.Fragment>
    );
  }
}
