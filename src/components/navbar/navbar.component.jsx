import React from "react";
import "./navbar.styles.scss";

export default class Navbar extends React.Component {
  render() {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
      <ul className="nav-bar">
        {languages.map((language, index) => (
          <li key={index}>
            <button className="nav-btn nav-link">{language}</button>
          </li>
        ))}
      </ul>
    );
  }
}
