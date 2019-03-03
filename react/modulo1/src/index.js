import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./style.scss"; 

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  render() {
    return (
      <Fragment>
        <h1>Hello WOrd</h1>
        <Button onClick={this.handleClick}>Somar</Button>
        {this.state.counter}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
