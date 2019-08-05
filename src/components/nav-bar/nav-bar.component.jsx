import React from "react";
import { ThemeConsumer } from "../../contexts/theme";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav>
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
