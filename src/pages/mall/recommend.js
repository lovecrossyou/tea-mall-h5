/**
 *Created by tianhaojie .
 *Created on 2019-01-21 .
 *desc
 */
import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import found_btn_search from "./image/found_btn_search@2x.png";
import found_btn_nolike from "./image/found_btn_nolike@2x.png";
import water1 from "./image/1.jpg";
import NavBarList from "../../components/navbarlist";
import router from "umi/router";

const FindTea = function() {
  return (
    <div className={styles.tea_mall_nav}>
      <div className={styles.tea_mall_nav_left}>
        <NavBarList
          data={navList}
          activeCls={{
            color: "#333333",
            fontSize: "44px",
            borderBottom: "6px solid red"
          }}
        />
      </div>
      <div className={styles.tea_mall_nav_right}>
        <div className={styles.found_btn_search_img}>
          <img src={found_btn_search} alt="" />
        </div>
        <div>搜索</div>
      </div>
    </div>
  );
};

const Product = function() {
  return (
    <div
      className={styles.water_fail_product_item}
      onClick={() => {
        router.push("./endorsement");
      }}
    >
      <div className={styles.water_fail_product_img}>
        <img src={water1} alt="" />
      </div>
      <div className={styles.water_fail_product_content}>
        <div className={styles.water_fail_product_tit}>茶艺修行之礼仪篇</div>
        <div className={styles.water_fail_product_intro}>
          茶艺修行之礼仪篇茶艺修行之礼仪篇
        </div>
        <div className={styles.water_fail_product_personal_data}>
          <div className={styles.water_fail_product_personal_data_img}>
            <img src={water1} alt="" />
            <span>高阳</span>
          </div>
          <div className={styles.water_fail_product_personal_data_love}>
            <img src={found_btn_nolike} alt="" />
            <span>1294</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default class Recommend extends PureComponent {
  render() {
    return (
      <div className={styles.water_fail_view}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}
