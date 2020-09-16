import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 className="Timer">
          Time Spent on App: <div className="counter">{count}</div> Seconds
        </h1>
      </div>
    );
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
}

export default Timer;
