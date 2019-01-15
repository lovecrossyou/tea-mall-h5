/**
 *日期: 2019-01-15
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.css";

import zhu from "./images/zhulizhe.jpg";
import gotoNext from "./images/center_icon_next@2x.png";
import obligationsIcon from "./images/Center_icon_obligations@2x.png";
import dropshipIcon from "./images/center_icon_Dropship@2x.png";
import receivingIcon from "./images/center_icon_receiving@2x.png";
import evaluatedIcon from "./images/center_icon_evaluated@2x.png";
import refundIcon from "./images/center_icon_ refund@2x.png";
import walletIcon from "./images/center_icon_Wallet@2x.png";
import couponIcon from "./images/center_icon_Coupon@2x.png";
import storeIcon from "./images/center_icon_store@2x.png";
import settingIcon from "./images/center_icon_Setting@2x.png";
import router from "umi/router";
import { MeItem } from "./components";

// 头部个人信息
const Header = () => {
  return (
    <div className={styles.header_bg}>
      {/*个人信息*/}
      <div className={styles.person_info_area}>
        <div className={styles.person_img}>
          <img src={zhu} alt="" />
        </div>
        <div className={styles.person_info_list}>
          <div className={styles.user_name_grade}>
            <div className={styles.user_name}>开荒者朱理哲</div>
            <div className={styles.user_grade}>lv5</div>
          </div>
          <div className={styles.num_details}>
            <div className={styles.user_attention}>22 关注</div>
            <div className={styles.user_fans}>250 粉丝</div>
            <div className={styles.praise_num}>5216 获赞</div>
          </div>
        </div>
      </div>

      {/*发布 & 喜欢 & 代言*/}
      <div className={styles.person_info_bottom}>
        <div className={styles.my_operation}>
          <div className={styles.operation_title}>我的发布</div>
          <div className={styles.operation_num}>24</div>
        </div>
        <div className={styles.my_operation}>
          <div className={styles.operation_title}>我的喜欢</div>
          <div className={styles.operation_num}>555</div>
        </div>
        <div className={styles.my_operation}>
          <div className={styles.operation_title}>我的代言</div>
          <div className={styles.operation_num}>666</div>
        </div>
      </div>
    </div>
  );
};

//发货管理&售后管理
const CargoManage = () => {
  return (
    <div className={styles.cargo_manage_area}>
      <div className={styles.my_order_area}>
        <div className={styles.my_order_text}>我的订单</div>
        <div className={styles.all_order_area}>
          <div
            className={styles.all_order_text}
            onClick={() => {
              router.push("/myorder");
            }}
          >
            全部订单
          </div>
          <div className={styles.next_icon}>
            <img src={gotoNext} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cargo_manage_list}>
        {/*<CargoManage img={obligationsIcon} title="待付款"/>*/}

        <div className={styles.cargo_manage_option}>
          <div className={styles.manage_option_img}>
            <img src={dropshipIcon} style={{ width: "47px", height: "47px" }} />
          </div>
          <div className={styles.manage_option_text}>待发货</div>
        </div>
        <div className={styles.cargo_manage_option}>
          <div className={styles.manage_option_img}>
            <img
              src={receivingIcon}
              style={{ width: "48px", height: "45px" }}
            />
          </div>
          <div className={styles.manage_option_text}>待收货</div>
        </div>
        <div className={styles.cargo_manage_option}>
          <div className={styles.manage_option_img}>
            <img
              src={evaluatedIcon}
              style={{ width: "47px", height: "44px" }}
            />
          </div>
          <div className={styles.manage_option_text}>待评价</div>
        </div>
        <div className={styles.cargo_manage_option}>
          <div className={styles.manage_option_img}>
            <img src={refundIcon} style={{ width: "48px", height: "45px" }} />
          </div>
          <div className={styles.manage_option_text}>退款 / 售后</div>
        </div>
      </div>
    </div>
  );
};
//钱包 & 优惠券 & 开店 & 设置
const MainOperation = () => {
  return (
    <div className={styles.person_operation_bottom}>
      <MeItem title="我的钱包" icon={walletIcon} />
      <MeItem title="优惠券" subtitle="3张优惠券" icon={couponIcon} />
      <MeItem title="我要开店" icon={storeIcon} />
      <MeItem title="设置" icon={settingIcon} />
      <div className={styles.person_operation_list}>
        <div className={styles.my_order_area_wrapper}>
          <div className={styles.my_order_img}>
            <img
              src={walletIcon}
              alt=""
              style={{ width: "36px", height: "40px" }}
            />
          </div>
          <div className={styles.my_order_text}>我的钱包</div>
        </div>
        <div className={styles.all_order_area}>
          <div className={styles.next_icon}>
            <img src={gotoNext} alt="" />
          </div>
        </div>
      </div>
      <MeItem title="优惠券" subtitle="3张优惠券" icon={couponIcon} />
      <MeItem title="我要开店" icon={storeIcon} />
      <div className={styles.person_operation_list}>
        <div className={styles.my_order_area_wrapper}>
          <div className={styles.my_order_img}>
            <img
              src={settingIcon}
              alt=""
              style={{ width: "40px", height: "36px" }}
            />
          </div>
          <div className={styles.my_order_text}>设置</div>
        </div>
        <div className={styles.all_order_area}>
          <div className={styles.next_icon}>
            <img src={gotoNext} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Me extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <CargoManage />
        <MainOperation />
      </div>
    );
  }
}
