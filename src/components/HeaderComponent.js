import React, { Component } from "react";

export default class Header extends Component {
  

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h1>ChattaCity Farms</h1>
              <h2>Diggin' the city</h2>
            </div>
          </div>
        </div>
        <hr className="pageline"/>
       </React.Fragment>
    );
  }
}
