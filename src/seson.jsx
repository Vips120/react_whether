import React, { Component } from "react";
class Season extends Component {
  constructor(props) {
    super(props);
  }
  seasonConfig = {
    winter: {
      text: "ITS A VERY COLD TIME",
      icon: "winter"
    },
    monsoon: {
      text: "ITS A rainy",
      icon: "monsoon"
    },
    summer: {
      text: "ITS A VERY HOT TIME",
      icon: "hot"
    }
  };

  container = {
    width: "100%",
    height: "600px"
  };

  wheatherReport = (data, month) => {
    if (month > 2 && month < 8) {
      return data > 0 ? "summer" : "monsoon";
    } else {
      return data > 0 ? "winter" : "summer";
    }
  };
  render() {
    const Report = this.wheatherReport(this.props.lat, new Date().getMonth());
    const a = this.seasonConfig[Report];
    console.log(a);
    const { text, icon } = this.seasonConfig[Report];
    if (Report === "winter") {
      return (
        <div
          className="container"
          className={`${Report}`}
          style={this.container}
        >
          <div className="row">
            <div className="col-md-8">
              <h2
                style={{
                  margin: "0px auto",
                  fontSize: "25px",
                  textAlign: "center"
                }}
              >
                {text} - {icon}
              </h2>
            </div>
          </div>
        </div>
      );
    } else if (Report === "monsoon") {
      return (
        <div
          className="container"
          className={`${Report}`}
          style={this.container}
        >
          <div className="row">
            <div className="col-md-8">
              {text} - {icon}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="container"
          className={`${Report}`}
          style={this.container}
        >
          <div className="row">
            <div className="col-md-8">
              {text} - {icon}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Season;
