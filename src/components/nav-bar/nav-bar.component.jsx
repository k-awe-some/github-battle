import React from "react";
import PropTypes from "prop-types";

import "./nav-bar.styles.scss";

const NavBar = ({ selected, onClickLang }) => {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="nav-bar">
      {languages.map(language => (
        <li key={language}>
          <button
            className="nav-btn nav-link"
            style={language === selected ? { color: "rgb(187, 46, 31)" } : null}
            onClick={() => onClickLang(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
};

NavBar.propTypes = {
  selected: PropTypes.string.isRequired,
  onClickLang: PropTypes.func.isRequired
};

export default NavBar;
