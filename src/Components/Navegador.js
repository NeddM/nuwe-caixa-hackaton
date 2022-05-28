import React, { Component } from "react";

class Navegador extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navegador">
          <div className="btnnav">
            <div className="group">
              <div id="l1"></div>
              <div id="l2"></div>
              <div id="l3"></div>
            </div>
          </div>
          <div className="btnnav">
            <div className="group">
              <div id="ex1"></div>
              <div id="ex2"></div>
            </div>
          </div>
          <div className="btnnav">
            <div className="group">
              <div id="vv1"></div>
              <div id="vv2"></div>
              <div id="vv3"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navegador;
