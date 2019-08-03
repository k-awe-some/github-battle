import React from "react";

import PlayerInput from "../player-input/player-input.component";
import PlayerInfo from "../player-info/player-info.component";
import Results from "../results/results.component";
import "./players.styles.scss";

class Players extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: "",
      playerTwo: "",
      battle: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPlayer = this.resetPlayer.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    });
  }

  resetPlayer(id) {
    this.setState({
      [id]: ""
    });
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle === true) {
      return (
        <React.Fragment>
          <h1>Results</h1>

          <Results playerOne={playerOne} playerTwo={playerTwo} />
        </React.Fragment>
      );
    }

    return (
      <div className="players-container">
        <h1>Players</h1>
        <div className="players">
          <div className="player">
            {!playerOne ? (
              <PlayerInput
                label={"Player One"}
                onSubmit={player => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerInfo
                username={playerOne}
                label={"Player One"}
                onReset={() => this.resetPlayer("playerOne")}
              />
            )}
          </div>

          <div className="player">
            {!playerTwo ? (
              <PlayerInput
                label={"Player Two"}
                onSubmit={player => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerInfo
                username={playerTwo}
                label={"Player Two"}
                onReset={() => this.resetPlayer("playerTwo")}
              />
            )}
          </div>
        </div>

        {playerOne && playerTwo && (
          <button
            className="btn-battle"
            onClick={() =>
              this.setState({
                battle: true
              })
            }
          >
            Battle
          </button>
        )}
      </div>
    );
  }
}

export default Players;
