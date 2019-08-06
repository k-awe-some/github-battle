import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { Link } from "react-router-dom";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from "react-icons/fa";

import Loading from "../loading/loading.component";
import Card from "../card/card.component";
import Tooltip from "../tooltip/tooltip.component";
import { getResults } from "../../utils/api";
import "./results.styles.scss";

const UserProfile = ({ profile }) => (
  <ul className="player-info">
    {profile.name && (
      <li>
        <FaUser color="#EF7373" size="25" />
        {profile.name}
      </li>
    )}
    {profile.location && (
      <li>
        <Tooltip text="User's location">
          <FaCompass color="#9074FF" size="25" />
          {profile.location}
        </Tooltip>
      </li>
    )}
    {profile.company && (
      <li>
        <Tooltip text="User's company">
          <FaBriefcase color="#967B71" size="25" />
          {profile.company}
        </Tooltip>
      </li>
    )}
    <li>
      <FaUsers color="#81C3F5" size="25" />
      {profile.followers} followers
    </li>
    <li>
      <FaUserFriends color="#40B75F" size="25" />
      {profile.following} following
    </li>
    <li>
      <FaCode color="#3B4C55" size="25" />
      {profile.public_repos} repositories
    </li>
  </ul>
);

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired
};

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
    const { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );

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
      return <Loading text="Battling" speed={150} />;
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    return (
      <React.Fragment>
        <div className="results-container">
          <Card
            header={winner.score === loser.score ? "Tie" : "Winner"}
            avatar={winner.profile.avatar_url}
            subheader={`Score: ${winner.score}`}
            href={winner.profile.html_url}
            name={winner.profile.login}
          >
            <UserProfile profile={winner.profile} />
          </Card>

          <Card
            header={winner.score === loser.score ? "Tie" : "Loser"}
            avatar={loser.profile.avatar_url}
            subheader={`Score: ${loser.score}`}
            href={loser.profile.html_url}
            name={loser.profile.login}
          >
            <UserProfile profile={loser.profile} />
          </Card>
        </div>

        <Link to="/battle" className="reset-btn" onClick={this.props.onReset}>
          Reset
        </Link>
      </React.Fragment>
    );
  }
}

export default Results;
