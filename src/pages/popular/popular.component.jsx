import React from "react";

import "./popular.styles.scss";

import { fetchPopularRepos } from "../../utils/api";
import Loading from "../../components/loading/loading.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import ReposGrid from "../../components/repos-grid/repos-grid.component";

export default class Popular extends React.Component {
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
        <NavBar selected={selectedLanguage} onClickLang={this.updateLanguage} />
        {this.isLoading() && <Loading text="Fetching repos" speed={250} />}
        {error && <p className="error">{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}
