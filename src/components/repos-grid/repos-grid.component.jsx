import React from "react";
import PropTypes from "prop-types";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";

import "./repos-grid.styles.scss";

const ReposGrid = ({ repos }) => (
  <ul className="repos-grid">
    {repos.map((repo, index) => {
      const {
        name,
        owner,
        html_url,
        stargazers_count,
        forks,
        open_issues
      } = repo;
      const { login, avatar_url } = owner;

      return (
        <li className="repo-card" key={html_url}>
          <h4 className="repo-index">{`#${index + 1}`}</h4>
          <img
            className="repo-avatar"
            src={avatar_url}
            alt={`Avatar for ${login}`}
          />

          <h2 className="repo-link">
            <a href={html_url}>{login}</a>
          </h2>

          <ul className="repo-info-list">
            <li>
              <FaUser color="#FFBF74" size={22} />
              <a href={`https://github.com/${login}`}>{login}</a>
            </li>
            <li>
              <FaStar color="#FFD700" size={22} />
              {stargazers_count.toLocaleString()} stars
            </li>
            <li>
              <FaCodeBranch color="#81C3F5" size={22} />
              {forks.toLocaleString()} forks
            </li>
            <li>
              <FaExclamationTriangle color="#F18A93" size={22} />
              {open_issues.toLocaleString()} open issues
            </li>
          </ul>
        </li>
      );
    })}
  </ul>
);

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default ReposGrid;
