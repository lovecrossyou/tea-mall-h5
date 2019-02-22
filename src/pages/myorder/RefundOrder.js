import { PureComponent } from "react";
import React from "react";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import { connect } from "dva";
import ScrollWrap from "../../components/scroll";
import { Toast, WhiteSpace } from "antd-mobile";
import { OrderListItem } from "./OrderList";
import router from "umi/router";
/**
 *Created by tianhaojie .
 *Created on 2019-01-14 .
 *desc
 */
class RefundOrder extends PureComponent {
  componentWillMount() {
    Toast.loading("loading...", 0);
    this.props.dispatch({
      type: "myorder/getOrderList",
      payload: {}
    });
    setTimeout(() => {
      Toast.hide();
    }, 1000);
  }
  render() {
    const { orderList } = this.props.store;
    return (
      <div className={styles.order_refund_container}>
        <Navigator title={"退货"} />
        <ScrollWrap wrapId="refundOrder" wrapClass={styles.myOrder_scroll}>
          {orderList.map((value, index) => {
            return (
              <div key={index + "#"}>
                <OrderListItem
                  data={value}
                  onClick={() => {
                    router.push("/myorder/RefundApply");
                  }}
                />
                <OrderItemFooter />
              </div>
            );
          })}
        </ScrollWrap>
      </div>
    );
  }
}
const OrderItemFooter = () => {
  return (
    <div className={styles.orderItem_footer_container}>
      <div className={styles.orderItem_middle_line} />
      <div className={styles.orderItem_bottom}>
        <div className={styles.orderItem_bottom_refunding}>{"退款中"}</div>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundOrder);
