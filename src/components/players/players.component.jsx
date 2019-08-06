import React from "react";
import { Link } from "react-router-dom";

import PlayerInput from "../player-input/player-input.component";
import PlayerInfo from "../player-info/player-info.component";
import "./players.styles.scss";

class Players extends React.Component {
  state = {
    playerOne: "",
    playerTwo: ""
  };

  handleSubmit = (id, player) => {
    this.setState({
      [id]: player
    });
  };

  resetPlayer = id => {
    this.setState({
      [id]: ""
    });
  };

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <div className="players-container">
        <h1 style={{ textAlign: "center" }}>Players</h1>
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
          <Link
            className="btn-battle"
            to={{
              pathname: "/battle/results",
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}

export default Players;
