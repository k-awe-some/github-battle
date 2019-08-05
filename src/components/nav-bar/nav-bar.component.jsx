import React from "react";
import { ThemeConsumer } from "../../contexts/theme";

import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav>
          <button onClick={toggleTheme}>
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
};

export default NavBar;
