import React from "react";

import { getResults } from "../../utils/api";
import "./results.styles.scss";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;

    getResults([playerOne, playerTwo])
      .then(players =>
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false
        })
      )
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default Results;
