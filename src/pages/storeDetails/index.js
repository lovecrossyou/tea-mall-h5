/**
 *日期: 2019/1/11
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import backIcon from "./images/store_top_icon_return@2x.png";
import classfiyIcon from "./images/store_top_icon_classification@2x.png";

class storeDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      needIndex: 0
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.top_area}>
          <div className={styles.top_search}>
            <div className={styles.back_icon}>
              <img src={backIcon} alt="" />
            </div>
            <div className={styles.top_search_input}>
              <input type="text" placeholder="搜索店铺内商品" />
            </div>
            <div className={styles.classfiy_icon}>
              <img src={classfiyIcon} alt="" />
            </div>
          </div>
          ;
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.storeDetails
  };
})(storeDetails);
