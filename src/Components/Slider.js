import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slider">
          <div className="sli">
            <h3>Transactions</h3>
            <p>35</p>
            <h5>LAST MONTH</h5>
          </div>
          <div className="sli">
            <h3>Transactions</h3>
            <p>3</p>
            <h5>TODAY</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;