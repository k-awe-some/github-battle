import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

import "./instructions.styles.scss";

const Instructions = () => (
  <div className="instructions-container">
    <h1 className="instructions-header">Instructions</h1>
    <ol className="instructions-list">
      <li>
        <h3>1. Enter two Github users</h3>
        <FaUserFriends size={150} color="#34b1eb" />
      </li>

      <li>
        <h3>2. Battle</h3>
        <FaFighterJet size={150} color="#eb4034" />
      </li>

      <li>
        <h3>3. See the winner</h3>
        <FaTrophy size={150} color="#FFD700" />
      </li>
    </ol>
  </div>
);

export default Instructions;
