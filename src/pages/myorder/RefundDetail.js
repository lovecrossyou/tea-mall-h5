/**
 *Created by tianhaojie .
 *Created on 2019-01-17 .
 *desc
 */
import { PureComponent } from "react";
import React from "react";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import { connect } from "dva";
import ScrollWrap from "../../components/scroll";
import { Toast, WhiteSpace } from "antd-mobile";
import { OrderListItem } from "./index";
import router from "umi/router";
import { OrderTopProduct } from "./components/OrderComponents";
import { RefundMoney } from "./RefundApplySubmit";

class RefundDetail extends PureComponent {
  render() {
    return (
      <div>
        <Navigator title={"退款成功"} />
        <div className={styles.refundDetail}>
          <ScrollWrap
            wrapId={"refundDetail_scroll"}
            wrapClass={styles.refundDetail_scroll}
          >
            <ResultHeader />

            <WhiteSpace />
            <RefundMoney />

            <WhiteSpace />
            <RefundMessage />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
const RefundMessage = () => {
  let reasonKeys = [
    "退款原因：",
    "退款金额：",
    "申请件数：",
    "申请时间：",
    "退款编号："
  ];
  let reasonValues = [
    "不喜欢味道不好",
    "¥ 125.50",
    "1",
    "2018-9-10 12:10",
    "1234527775838883"
  ];
  return (
    <div className={styles.refundDetail_message}>
      <div className={styles.refundDetail_message_title}>退款信息</div>
      <OrderTopProduct
        orderTopProduct={styles.refundDetail_orderProduct_message}
        data={{
          img:
            "http://img4.imgtn.bdimg.com/it/u=2769118404,1000928488&fm=15&gp=0.jpg",
          name: "洞庭碧螺春洞庭碧螺春洞庭碧螺春洞庭 碧螺春洞庭碧螺春洞庭碧螺春",
          standard: "规格6小包80g"
        }}
      />
      {reasonKeys.map((value, index) => {
        return (
          <div key={index + "#"} className={styles.refundDetail_reason_info}>
            {value + reasonValues[index]}
          </div>
        );
      })}
    </div>
  );
};
const ResultHeader = () => {
  return (
    <div className={styles.resultHeader_c}>
      <div className={styles.resultHeader_status}>{"退款成功"}</div>
      <div className={styles.resultHeader_time}>{"2018-9-14 12：25"}</div>
    </div>
  );
};
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundDetail);
