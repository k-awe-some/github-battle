import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../../contexts/theme";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import "./nav-bar.styles.scss";

const activeStyle = {
  color: "rgb(187, 46, 31)"
};

const NavBar = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={activeStyle}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/battle" activeStyle={activeStyle}>
                Battle
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <FaLightbulb size="40" color="#1c2022" />
            ) : (
              <FaRegLightbulb size="40" color="#FFD679" />
            )}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
};

export default NavBar;
