import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 167777215).toString(16);
}

class App extends Component {
  state = {
    color: "#00000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    );
  }
}

export default App;
