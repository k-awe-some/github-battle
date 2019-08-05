import React from "react";

const withHover = (Component, propName = "hovering") =>
  class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver() {
      this.setState({
        hovering: true
      });
    }
    mouseOut() {
      this.setState({
        hovering: false
      });
    }

    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      };

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };

export default withHover;
