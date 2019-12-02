import React, { Component } from "react";
import Season from "./seson";
class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      error: ""
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ error: error.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.error) {
      return (
        <div className="App">
          <Season lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.error) {
      return (
        <div className="App">
          <h2>LATITUDE: {this.state.error}</h2>
        </div>
      );
    }
    return <div>LOADING...</div>;
  }
}

export default App;
