import React from "react";
import PropTypes from "prop-types";

import { fetchPopularRepos } from "../../utils/api";
import "./navbar.styles.scss";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: {},
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
      error: null
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data =>
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }))
        )
        .catch(error => {
          console.warn("Error fetching repos", error);
          this.setState({
            error: "There was an error fetching the repositories."
          });
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
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
        {repos[selectedLanguage] && (
          <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
        )}
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
