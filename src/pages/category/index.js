/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:39:02
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:03:00
 */

import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import { Layout, } from "antd";
import router from "umi/router";

import back_icon from "./images/class_icon_ return@2x.png";
import ScrollWrap from "../../components/scroll";

const { Header, Footer, Sider, Content } = Layout;

const SearchBox = () => {
  return (
    <div className={styles.top_search}>
      <div className={styles.back_icon} onClick={()=>router.go(-1)}>
        <img src={back_icon} alt=""/>
      </div>
      <div className={styles.top_search_input}>
        <input type="text" placeholder="搜索商品或品牌"/>
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
    this.clientHeight = window.document.body.clientHeight;
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
        <SearchBox/>
        <ul style={{ height: `${this.clientHeight - 188}px`, position: "relative" }}>
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
          <ScrollWrap wrapId="rootList" wrapClass={styles.wrap_body}>
            <li className={styles.classify_content_wrap}>
              {subcategoriesList.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={styles.classify_product}
                  >
                    <div className={styles.shop_img}>
                      <img src={data.secondCategoryImageUrl} alt=""/>
                    </div>
                    <div className={styles.shop_img_text}>
                      {data.secondCategoryName}
                    </div>
                  </div>
                );
              })}
            </li>
          </ScrollWrap>
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
