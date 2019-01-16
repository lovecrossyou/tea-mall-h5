/**
 *日期: 2019/1/16
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.css";
import { Navigator } from "../../components/navigator";
import ScrollWrap from "../../components/scroll";
import router from "umi/router";
import teaImg from "./images/Spokesperson_img@2x.png";

// 头部
const Header = () => {
  return (
    <div className={styles.header_area}>
      <div className={styles.represent_info}>
        <div className={styles.represent_text}>代言商品</div>
        <div className={styles.represent_num}>24</div>
      </div>
      <div className={styles.represent_info}>
        <div className={styles.represent_text}>点击次数</div>
        <div className={styles.represent_num}>245</div>
      </div>
      <div className={styles.represent_info}>
        <div className={styles.represent_text}>收入</div>
        <div className={styles.represent_num}>124</div>
      </div>
    </div>
  );
};

// 代言商品
const RepresentList = () => {
  return (
    <div className={styles.represent_shop_info} onClick={()=>router.push('/product')}>
      <div className={styles.tea_img}>
        <img src={teaImg} alt="" />
      </div>
      <div className={styles.represent_shop_details}>
        <div className={styles.represent_shop_name}>
          白桃乌龙茶15白桃乌龙茶桃乌龙
        </div>
        <div className={styles.represent_shop_clicl}>
          <div className={styles.represent_shop_clicl_text}>点击量：</div>
          <div className={styles.represent_shop_clicl_num}>2500次</div>
        </div>
        <div className={styles.represent_shop_clicl}>
          <div className={styles.represent_shop_clicl_text}>收益：</div>
          <div className={styles.represent_shop_clicl_num}>452元</div>
        </div>
      </div>
    </div>
  );
};

export default class Represent extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  render() {
    return (
      <div className={styles.represent_wrapper}>
        <div
          style={{
            height: `${this.clientHeight - 180}px`,
            position: "relative"
          }}
        >
          <Navigator title="代言商品" />
          <Header />
          <ScrollWrap wrapId="representList" wrapClass={styles.wrap_body}>
            <RepresentList />
            <RepresentList />
            <RepresentList />
            <RepresentList />
            <RepresentList />
            <RepresentList />
            <RepresentList />
            <RepresentList />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
