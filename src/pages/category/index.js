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

const { Header, Footer, Sider, Content } = Layout;

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      needIndex: 0,
      list: [
        { title: "热卖", content: "111111" },
        { title: "绿茶", content: "222222" },
        { title: "红茶", content: "333333" },
        { title: "乌龙茶", content: "4444444" },
        { title: "黑茶", content: "555555" },
        { title: "白茶", content: "666666" },
        { title: "黄茶", content: "222222" },
        { title: "花草茶", content: "000000" },
        { title: "茶具", content: "88888" }
      ]
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  handleClick(e) {
    console.log(e);
    this.setState({
      needIndex: e
    });
  }

  render() {
    const {firstList,needIndex,subcategoriesList} = this.props.store ;


    console.log('subcategoriesList ',subcategoriesList)
    return (
      <div className={styles.wrapper}>
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
                    <img src={data.imageUrl} alt=""/>
                  </div>
                  <div className={styles.shop_img_text}>{data.title}</div>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(state=>{
  return {
    store:state.category
  }
})(Category);

