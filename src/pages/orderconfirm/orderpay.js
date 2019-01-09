import { PureComponent } from "react";
import styles from "./index.less";
import React from "react";
import { Navigator } from "../../layouts/navigator";
import {Stepper } from 'antd-mobile';

import addr_icon from "./images/order_icon_address@2x.png";
import arrow_right from "./images/order_icon_next@2x.png";
import store_icon from "./images/order_icon_stor@2x.png";
import coupons_icon from "./images/order_icon_coupons@2x.png";
import number_icon from "./images/order_icon_number@2x.png";
import distribution_icon from "./images/order_icon_distribution@2x.png";
import money_icon from './images/order_icon_money@2x.png'

const Footer = ()=>{
  return <div className={styles.confirm_footer}>
    确认支付
  </div>
}



export default class OrderPay extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Navigator title='订单支付'/>
        <Footer/>
      </div>
    );
  }
}
