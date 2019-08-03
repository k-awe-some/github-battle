import React from "react";
import PropTypes from "prop-types";

import "./player-input.styles.scss";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <form className="player-form" onSubmit={this.handleSubmit}>
        <label className="player-label">{this.props.label}</label>
        <div className="player-inputs">
          <input
            className="input"
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-dark"
            type="submit"
            disabled={!this.state.username}
          >
            submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default PlayerInput;
