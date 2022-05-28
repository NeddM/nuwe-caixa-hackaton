import React, { Component } from "react";

class Grafico extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grafico">
          <div className="centrografico">
            <h3>Transactions Last Year</h3>
            <div className="chbtn">
              <div className="chmoment" id="chactive">
                Monthly
              </div>
              <div className="chmoment">Daily</div>
            </div>
            <div class="dibujo">
              <div className="n1">29</div>
              <div className="n2">28</div>
              <div className="n3">27</div>
              <div className="n4">26</div>
              <div className="n5">25</div>
              <div className="ja">Jan</div>
              <div className="fe">Feb</div>
              <div className="mr">Mar</div>
              <div className="ap">Apr</div>
              <div className="my">May</div>
              <div className="ju">Jun</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Grafico;