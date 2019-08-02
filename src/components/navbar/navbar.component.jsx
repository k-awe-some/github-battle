import React from "react";
import PropTypes from "prop-types";

import { fetchPopularRepos } from "../../utils/api";
import "./navbar.styles.scss";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: null,
      error: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    });

    fetchPopularRepos(selectedLanguage)
      .then(repos =>
        this.setState({
          repos,
          error: null
        })
      )
      .catch(error => {
        console.warn("Error fetching repos", error);
        this.setState({
          error: "There was an errolr fetching the repositories."
        });
      });
  }

  isLoading() {
    return this.state.repos === null && this.state.error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <NavLang
          selected={selectedLanguage}
          onClickLang={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING</p>}
        {error && <p>{error}</p>}
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    );
  }
}

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
