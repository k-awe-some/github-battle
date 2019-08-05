import React from "react";
import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";

import { ThemeConsumer } from "../../contexts/theme";
import "./player-info.styles.scss";

const PlayerInfo = ({ username, label, onReset }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <div>
        <p className="player-label">{label}</p>
        <div className={`player-info-box bg-${theme}`}>
          <img
            className="player-avatar"
            src={`https://github.com/${username}.png?size=60`}
            alt="player avatar"
          />
          <h4 className="player-username">
            <a href={`https://github.com/${username}`}>{username}</a>
          </h4>
          <button className="btn">
            <FaTimesCircle size={40} onClick={() => onReset()} />
          </button>
        </div>
      </div>
    )}
  </ThemeConsumer>
);

PlayerInfo.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default PlayerInfo;
