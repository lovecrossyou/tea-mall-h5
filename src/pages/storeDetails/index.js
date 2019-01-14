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
import storeImg from "./images/store_logo@2x.png";
import attentionImg from "./images/store_Focus@2x.png";
import router from "umi/router";

//头部搜索 & 店铺信息
const SearchArea = () => {
  return (
    <div className={styles.top_area}>
      <div className={styles.top_search}>
        <div className={styles.back_icon}>
          <img src={backIcon} alt="" />
        </div>
        <div className={styles.top_search_input}>
          <input type="text" placeholder="搜索店铺内商品" />
        </div>
        <div className={styles.classfiy_icon}>
          <div>
            <img src={classfiyIcon} alt="" />
          </div>
          <div className={styles.classfiy_text}>分类</div>
        </div>
      </div>
      <div className={styles.store_info}>
        <div className={styles.store_info_left}>
          <div className={styles.store_img}>
            <img src={storeImg} alt="" />
          </div>
          <div className={styles.store_name_area}>
            <div className={styles.store_name}>张一元旗舰店</div>
            <p className={styles.store_fans}>粉丝数21.5万</p>
          </div>
        </div>
        <div className={styles.store_attention}>
          <img src={attentionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

class storeDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      needIndex: 0,
      list: [
        { title: "首页", content: "11111" },
        { title: "新品", content: "2222" },
        { title: "热门", content: "3333" },
        { title: "活动", content: "444444" }
      ]
    };
  }

  handleClick(e) {
    this.setState({
      needIndex: e
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <SearchArea />
        <div className={styles.store_classify_area}>
          <div className={styles.store_classify_option}>
            {this.state.list.map((data, index) => {
              return (
                <div
                  key={index}
                  onClick={this.handleClick.bind(this, index)}
                  className={
                    this.state.needIndex === index
                      ? styles.onclick_after
                      : styles.onclick_before
                  }
                >
                  {data.title}
                </div>
              );
            })}
          </div>
          <div>
            {this.state.list.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: this.state.needIndex === index ? "block" : "none"
                  }}
                >
                  {data.content}
                </div>
              );
            })}
          </div>
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
