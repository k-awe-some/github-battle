import React from "react";
import PropTypes from "prop-types";

import { ThemeConsumer } from "../../contexts/theme";
import "./card.styles.scss";

const Card = ({ header, subheader, avatar, href, username, children }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <div className={`card bg-${theme}`}>
        <h2 className="header">{header}</h2>
        <img className="avatar" src={avatar} alt={`Avatar for ${username}`} />
        {subheader && <h4 className="subheader">{subheader}</h4>}
        <h3 className="link">
          <a href={href}>{username}</a>
        </h3>
        {children}
      </div>
    )}
  </ThemeConsumer>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Card;
