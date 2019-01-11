/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:39:02
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:03:00
 */

import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import { Layout, Row, Col, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import back_icon from "./images/class_icon_ return@2x.png";

const { Header, Footer, Sider, Content } = Layout;

const SearchBox = () => {
  return (
    <div className={styles.top_search}>
      <div className={styles.back_icon}>
        <img src={back_icon} alt="" />
      </div>
      <div className={styles.top_search_input}>
        <input type="text" placeholder="搜索商品或品牌" />
      </div>
    </div>
  );
};

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      needIndex: 0
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  handleClick(e) {
    this.setState({
      needIndex: e
    });
  }

  render() {
    const { firstList, needIndex, subcategoriesList } = this.props.store;
    console.log("subcategoriesList ", subcategoriesList);

    return (
      <div className={styles.wrapper}>
        <SearchBox />
        <ul>
          <li className={styles.classify_list}>
            {firstList.map((data, index) => {
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
          </li>
          <li className={styles.classify_content_wrap}>
            {subcategoriesList.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: this.state.needIndex === index ? "block" : "none"
                  }}
                  className={styles.classify_shop}
                >
                  <div className={styles.shop_img}>
                    <img src={data.secondCategoryImageUrl} alt="" />
                  </div>
                  <div className={styles.shop_img_text}>
                    {data.secondCategoryName}
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.category
  };
})(Category);
