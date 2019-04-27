import React, { Component } from "react";
import { carPurchase } from "./mixpanel";

class Home extends Component {
  handleClick = (e) => {
    const carData = e.target.value.split(" ");
    carPurchase(...carData);
  }
  render() {
    return (
      <div>
        <button value="blue mercedes" onClick={this.handleClick}>Blue Car</button>
        <button value="white audi" onClick={this.handleClick}>White Car</button>
      </div>
    );
  }
};

export default Home;