import React from "react";
import PropTypes from "prop-types";

const NavLang = ({ selected, onClickLang }) => {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="nav-lang">
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

NavLang.propTypes = {
  selected: PropTypes.string.isRequired,
  onClickLang: PropTypes.func.isRequired
};

export default NavLang;
