import React, { PureComponent } from "react";
import styles from "./index.less";
import { TabBar } from "antd-mobile";
import Swiper from "react-id-swiper";

import header_bg from "./image/goodtea_top_bg@2x.png";
import shoppingcart_btn from "./image/goodtea_btn_shopping@2x.png";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_title}>好茶试饮</div>
      <div className={styles.header_subtitle}>
        新用户福利 人气种草好茶免费送
      </div>
    </div>
  );
};


const ProductItem = () => {
  return <div className={styles.product_item}>
    <img className={styles.product_item_icon} src="" alt=""/>
    <div className={styles.product_item_infos}>
      <div className={styles.product_item_title}>
        蜜桃乌龙茶花果茶买2送1
        白桃乌龙茶15包组
      </div>
      <div className={styles.product_item_subtitle}>
        热泡、冷泡随心泡买二送一
      </div>
      <div className={styles.product_item_price}>￥0</div>
    </div>

    <img className={styles.shopping_btn} src={shoppingcart_btn} alt=""/>
  </div>;
};


const Products = () => {
  return <div>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
  </div>;
};

const SegmentedControl = () => {
  return <div className={styles.segmentcontrol}>
        <div className={styles.segmentcontrol_left}>今日秒杀</div>
        <div className={styles.segmentcontrol_right}>明日预告</div>
  </div>;
};

const Timer = ()=>{
  return <div className={styles.timer}>
    23:15:24.12
  </div>
}

export default class Index extends PureComponent {
  render() {
    const params = {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      },
      containerClass: "limit_swiper_container"
    };

    return (
      <div className={styles.container}>
        <Header/>
        <SegmentedControl
          values={["今日秒杀", "明日预告"]}/>
        <Timer/>
        <Products/>
      </div>
    );
  }
}
