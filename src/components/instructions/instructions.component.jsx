import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

import { ThemeConsumer } from "../../contexts/theme";

import "./instructions.styles.scss";

const Instructions = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <div className="instructions-container">
        <h1>Instructions</h1>
        <ol className="instructions-list">
          <li>
            <h3>1. Enter two Github users</h3>
            <FaUserFriends
              className={`bg-${theme}`}
              size={130}
              color="#34b1eb"
            />
          </li>

          <li>
            <h3>2. Battle</h3>
            <FaFighterJet
              className={`bg-${theme}`}
              size={130}
              color="#eb4034"
            />
          </li>

          <li>
            <h3>3. See the winner</h3>
            <FaTrophy className={`bg-${theme}`} size={130} color="#FFD700" />
          </li>
        </ol>
      </div>
    )}
  </ThemeConsumer>
);

export default Instructions;
