import React, { Component } from "react";
import styles from "./starRate.css";
import xingxing_s from "../../assets/xingxing_s.png";
import xingxing_n from "../../assets/xingxing_n.png";
const stars = ["1", "2", "3", "4", "5"];
export default class StarRate extends Component {
  constructor() {
    super();
    this.state = {
      value: 2
    };
  }
  click(index) {
    this.setState({
      value: index
    });
  }
  render() {
    return (
      <div className={styles.star_container}>
        {stars.map((value, index) => {
          return (
            <div key={index + "#"} onClick={() => this.click(index)}>
              <img
                className={styles.star}
                src={index <= this.state.value ? xingxing_s : xingxing_n}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
