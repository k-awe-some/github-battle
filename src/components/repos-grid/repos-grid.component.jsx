import React from "react";
import PropTypes from "prop-types";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";

import Card from "../card/card.component";
import Tooltip from "../tooltip/tooltip.component";

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
        <Card
          key={html_url}
          header={`#${index + 1}`}
          avatar={avatar_url}
          href={html_url}
          name={name}
        >
          <ul className="repo-info-list">
            <li>
              <Tooltip text="GitHub username">
                <FaUser color="#FFBF74" size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </Tooltip>
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
        </Card>
      );
    })}
  </ul>
);

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default ReposGrid;
