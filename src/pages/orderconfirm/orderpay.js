import { PureComponent } from "react";
import styles from "./index.css";
import React from "react";
import { Navigator } from "../../components/navigator";
import { Stepper } from "antd-mobile";

import weixin_icon from "./images/pay_icon_weixin@2x.png";
import weixin_icon_sel from "./images/pay_btn_selected_weixin@2x.png";
import unsel_icon from "./images/pay_btn@2x.png";

import alipay_icon from "./images/pay_icon_zhifubao@2x.png";
import alipay_icon_sel from "./images/pay_btn_selected_zhifubao@2x.png";

const Footer = () => {
  return <div className={styles.confirm_footer}>确认支付</div>;
};

const PayChannel = ({
  icon,
  title = "",
  selIcon,
  unselIcon,
  selelcted,
  onClick
}) => {
  return (
    <div className={styles.p_option} onClick={onClick}>
      <div className={styles.p_option_left}>
        <img src={icon} alt="" className={styles.pay_icon} />
        <div className={styles.p_option_title}>{title}</div>
      </div>
      {selelcted ? (
        <img className={styles.pay_icon_right} src={selIcon} alt="" />
      ) : (
        <img className={styles.pay_icon_right} src={unselIcon} alt="" />
      )}
    </div>
  );
};

const paychannels = [
  {
    icon: weixin_icon,
    selIcon: weixin_icon_sel,
    title: "微信支付",
    unselIcon: unsel_icon
  },
  {
    icon: alipay_icon,
    selIcon: alipay_icon_sel,
    title: "支付宝付款",
    unselIcon: unsel_icon
  }
];

const PayContent = ({ currentIndex = 0, onClick }) => {
  return (
    <div className={styles.order_content}>
      <div className={styles.order_pay_top}>
        <div className={styles.order_pay_top_time}>支付剩余时间23：59：39</div>
        <div className={styles.order_pay_top_amount}>￥32</div>
      </div>
      {paychannels.map((d, index) => {
        return (
          <PayChannel
            onClick={() => {
              onClick(index);
            }}
            key={index + "#"}
            icon={d.icon}
            selelcted={currentIndex === index}
            selIcon={d.selIcon}
            title="微信支付"
            unselIcon={d.unselIcon}
          />
        );
      })}
    </div>
  );
};

export default class OrderPay extends PureComponent {
  state = {
    selectedIndex: 0
  };

  render() {
    return (
      <div className={styles.container}>
        <Navigator title="订单支付" />

        <PayContent
          onClick={index => {
            this.setState({
              selectedIndex: index
            });
          }}
          currentIndex={this.state.selectedIndex}
        />
        <Footer />
      </div>
    );
  }
}
