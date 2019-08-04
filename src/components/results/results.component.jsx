import React from "react";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from "react-icons/fa";

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
    const { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    return (
      <div className="results-container">
        <div className="result-card">
          <h3
            style={{
              color: "#34B1EB",
              fontWeight: "400"
            }}
          >
            {winner.score === loser.score ? "Tie" : "Winner"}
          </h3>
          <img
            className="player-avatar"
            src={`https://github.com/${winner.profile.login}.png?size=200`}
            alt="Winner's avatar"
          />
          <p className="player-score">Score: {winner.score}</p>
          <h4>
            <a href={winner.profile.html_url}>{winner.profile.login}</a>
          </h4>
          <ol className="player-info">
            <li>
              <FaUser color="#EF7373" size="25" />
              {winner.profile.name}
            </li>
            <li>
              <FaCompass color="#9074FF" size="25" />
              {winner.profile.location}
            </li>
            <li>
              <FaBriefcase color="#967B71" size="25" />
              {winner.profile.company}
            </li>
            <li>
              <FaUsers color="#81C3F5" size="25" />
              {winner.profile.followers} followers
            </li>
            <li>
              <FaUserFriends color="#40B75F" size="25" />
              {winner.profile.following} following
            </li>
            <li>
              <FaCode color="#3B4C55" size="25" />
              {winner.profile.public_repos} repositories
            </li>
          </ol>
        </div>

        <div className="result-card">
          <h3
            style={{
              color: "#EB4034",
              fontWeight: "400"
            }}
          >
            Loser
          </h3>
          <img
            className="player-avatar"
            src={`https://github.com/${loser.profile.login}.png?size=250`}
            alt="Loser's avatar"
          />
          <p className="player-score">Score: {loser.score}</p>
          <h4>
            <a href={loser.profile.html_url}>{loser.profile.login}</a>
          </h4>
          <ol className="player-info">
            <li>
              <FaUser color="#EF7373" size="25" />
              {loser.profile.name}
            </li>
            <li>
              <FaCompass color="#9074FF" size="25" />
              {loser.profile.location}
            </li>
            <li>
              <FaBriefcase color="#967B71" size="25" />
              {loser.profile.company}
            </li>
            <li>
              <FaUsers color="#81C3F5" size="25" />
              {loser.profile.followers} followers
            </li>
            <li>
              <FaUserFriends color="#40B75F" size="25" />
              {loser.profile.following} following
            </li>
            <li>
              <FaCode color="#3B4C55" size="25" />
              {loser.profile.public_repos} repositories
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Results;
