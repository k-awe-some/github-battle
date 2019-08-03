import React from "react";

import { getResults } from "../../utils/api";
import "./results.styles.scss";

class Results extends React.Component {
  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    getResults([playerOne, playerTwo]).then(players =>
      console.log("data", players)
    );
  }

  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default Results;
