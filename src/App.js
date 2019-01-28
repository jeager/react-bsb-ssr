import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getInitialCount = () => {
    return this.props.initialProps && this.props.initialProps.count ? this.props.initialProps.count : 0
  }

  state = {
    count: this.getInitialCount(),
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <p>
            Count is at {this.state.count}!
          </p>
          <button className="hit-me-button" onClick={() => this.setState(prevState => ({count: prevState.count + 1}))}>
            HIT ME!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
