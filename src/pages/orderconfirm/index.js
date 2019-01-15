import { PureComponent } from "react";
import styles from "./index.css";
import React from "react";
import { Navigator } from "../../components/navigator";
import { Stepper } from "antd-mobile";

import addr_icon from "./images/order_icon_address@2x.png";
import arrow_right from "./images/order_icon_next@2x.png";
import store_icon from "./images/order_icon_stor@2x.png";
import coupons_icon from "./images/order_icon_coupons@2x.png";
import number_icon from "./images/order_icon_number@2x.png";
import distribution_icon from "./images/order_icon_distribution@2x.png";
import money_icon from "./images/order_icon_money@2x.png";
import router from "umi/router";

const Footer = ({ onClick }) => {
  return (
    <div className={styles.confirm_footer} onClick={onClick}>
      去支付
    </div>
  );
};

export const ProductOption = ({ icon, title = "", right }) => {
  return (
    <div className={styles.p_option}>
      <div className={styles.p_option_left}>
        <img src={icon} alt="" className={styles.p_option_icon} />
        <div className={styles.p_option_title}>{title}</div>
      </div>
      <div>{right}</div>
    </div>
  );
};

const ProductOptions = () => {
  return (
    <div>
      <ProductOption
        icon={number_icon}
        title="购买数量"
        right={
          <Stepper
            style={{ width: "280px", minWidth: "100px" }}
            showNumber
            max={100}
            min={1}
            defaultValue={3}
          />
        }
      />
      <ProductOption
        icon={distribution_icon}
        title="配送方式"
        right={<div className={styles.delivery}>快递￥6.00</div>}
      />
      <ProductOption
        icon={coupons_icon}
        title="优惠券"
        right={<div className={styles.delivery}>暂无可用优惠券</div>}
      />
    </div>
  );
};

const ProductOptionFooter = () => {
  return (
    <div className={styles.p_opt_footer}>
      <ProductOption icon={money_icon} title="实付款" right={<div />} />
    </div>
  );
};

const Address = () => {
  return (
    <div className={styles.addr}>
      <img className={styles.addr_icon} src={addr_icon} alt="" />

      <div className={styles.addr_info}>
        <div className={styles.addr_info_position}>
          北京市西城区百万庄大街粮科大厦
        </div>
        <div className={styles.addr_info_phone}>137431341641</div>
      </div>

      <img src={arrow_right} alt="" className={styles.addr_arrow} />
    </div>
  );
};

const ProductInfo = () => {
  return (
    <div>
      <div className={styles.shop_info}>
        <img className={styles.product_shop_icon} src={store_icon} alt="" />
        <div className={styles.shop_info_name}>茶茶旗舰店</div>
      </div>

      <div className={styles.p_info}>
        <img className={styles.p_icon} alt="" />
        <div className={styles.p_info_wrapper}>
          <div className={styles.p_name}>
            买一送一】蜜桃乌龙茶 白桃乌龙蜜 茶三角茶包水果味茶蜜桃茶
          </div>
          <div className={styles.p_special}>规格：45G</div>
        </div>
      </div>
    </div>
  );
};

const OrderContent = () => {
  return (
    <div className={styles.ordercontent}>
      <Address />
      <ProductInfo />
      <ProductOptions />
    </div>
  );
};

export default class OrderConfirm extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Navigator title="提交订单" />
        <OrderContent />
        <ProductOptionFooter />
        <Footer
          onClick={() => {
            console.log("xxx");
            router.push("/orderconfirm/orderpay");
          }}
        />
      </div>
    );
  }
}
