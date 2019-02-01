/**
 *日期: 2019/1/29
 *作者: xiannvrong
 *功能:
 */

import { PureComponent } from "react";
import styles from "./personalDetails.css";
import ScrollWrap from "../../components/scroll";
import React from "react";
import zhulizhe from "../mall/image/zhulizhe.jpg";
import userAdd from "./images/user_icon_add@2x.png";
import shoppingCart from "./images/user_icon_shopping cart@2x.png";
import nextIcon from "./images/user_icon_next@2x.png";
import router from "umi/router";
import water1 from "../mall/image/1.jpg";
import found_btn_nolike from "../mall/image/found_btn_nolike@2x.png";

// 头部
const PersonalHeader = () => {
  return (
    <div className={styles.header_wrapper}>
      {/*头像 & 关注*/}
      <div className={styles.personal_details_top}>
        <div className={styles.user_img}>
          <img src={zhulizhe} alt="" />
        </div>
        <div className={styles.attention_area}>
          <img src={userAdd} alt="" />
          <div>关注</div>
        </div>
      </div>
      {/*个人简介*/}
      <div className={styles.personal_intro_wrapper}>
        <div className={styles.personal_info}>
          <div className={styles.personal_name}>仙女蓉</div>
          <div className={styles.personal_lv}>lv100</div>
        </div>
        <div className={styles.signature_word}>
          用简短的一句话介绍一下自己吧~
        </div>
      </div>
      {/*代言商品*/}
      <div className={styles.advocacy_shop}>
        <div>
          <img
            src={shoppingCart}
            alt=""
            style={{ width: "21px", height: "24px" }}
          />
        </div>
        <div className={styles.advocacy_shop_text}>TA的代言商品</div>
        <div>
          <img
            src={nextIcon}
            alt=""
            style={{ width: "13px", height: "24px" }}
          />
        </div>
      </div>
      {/*关注 & 粉丝 & 获赞*/}
      <div className={styles.personal_bottom_area}>
        <div>10 关注</div>
        <div>1250 粉丝</div>
        <div>5214 获赞</div>
      </div>
    </div>
  );
};
// 作品列表
const Product = function() {
  return (
    <div
      className={styles.water_fail_product_item}
      onClick={() => {
        router.push("./endorsement");
      }}
    >
      <div className={styles.water_fail_product_img}>
        <img src={zhulizhe} alt="" />
      </div>
      <div className={styles.water_fail_product_content}>
        <div className={styles.water_fail_product_tit}>茶艺修行之礼仪篇</div>
        <div className={styles.water_fail_product_intro}>
          茶艺中的礼节指的是鞠茶艺中的礼节指的是鞠
        </div>
        <div className={styles.water_fail_product_personal_data}>
          <div className={styles.water_fail_product_personal_data_img}>
            <img src={zhulizhe} alt="" />
            <span>仙女蓉</span>
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

export default class personalDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.clientHeight - 150}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="Personal" wrapClass={styles.wrap_body}>
            <PersonalHeader />
            <div className={styles.product_list_wrapper}>
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
