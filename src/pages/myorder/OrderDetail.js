/**
 *Created by tianhaojie .
 *Created on 2019-01-24 .
 *desc
 */
import { PureComponent } from "react";
import React from "react";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import { connect } from "dva";
import ScrollWrap from "../../components/scroll";
import { Toast, WhiteSpace } from "antd-mobile";
import { OrderTopProduct } from "./components/OrderComponents";
import { ProductItem } from "../home/index";
import ReasonModal from "./components/ReasonModal";
const list = [
  {
    name: "订单编号：",
    value: "13456131454364163418543"
  },
  {
    name: "创建时间：",
    value: "2018-9-10 12：10"
  },
  {
    name: "成交时间：",
    value: "2018-9-10 14：25"
  }
];
class OrderDetail extends PureComponent {
  state = {
    reason: ""
  };
  render() {
    return (
      <div>
        <Navigator title={"订单详情"} />
        <div className={styles.orderDetail_container}>
          <ScrollWrap
            wrapId={"refundDetail_scroll"}
            wrapClass={styles.refundDetail_scroll}
          >
            <ResultHeader />

            <WhiteSpace />
            <RefundMessage />

            <OrderInfoButtom list={list} />

            <WhiteSpace />
            <OrderDetailCommand />
          </ScrollWrap>
        </div>

        <OrderDetailFooter
          callAction={() => {
            this.reasonModal._open();
          }}
        />
        <ReasonModal ref={c => (this.reasonModal = c)} click={value => {}} />
      </div>
    );
  }
}
const RefundMessage = () => {
  let details = [
    {
      name: "运费",
      value: 0
    },
    {
      name: "优惠券",
      value: 30
    },
    {
      name: "喜腾币抵扣",
      value: 3000
    },
    {
      name: "实付款",
      value: 40000
    }
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
      {details.map((value, index) => {
        return (
          <ResultRowItem
            data={value}
            key={"#" + index}
            valueStyle={
              index === details.length - 1 ? styles.resultRowItem_value_o : null
            }
          />
        );
      })}
    </div>
  );
};
export class ResultRowItem extends PureComponent {
  render() {
    const { data, valueStyle } = this.props;
    let style_value = valueStyle || styles.resultRowItem_value;
    return (
      <div className={styles.resultRowItem}>
        <div className={styles.resultRowItem_key}>{data.name}</div>
        <div className={style_value}>{"¥ " + data.value}</div>
      </div>
    );
  }
}
const ResultHeader = () => {
  return (
    <div className={styles.resultHeader_c}>
      <div className={styles.resultHeader_status}>{"等待买家付款"}</div>
      <div className={styles.resultHeader_time}>{"剩22小时59分自动关闭"}</div>
    </div>
  );
};
const OrderInfoButtom = ({ list }) => {
  return (
    <div className={styles.orderInfoButtom}>
      {list.map((value, index) => {
        return (
          <div className={styles.orderInfoButtom_item} key={"#" + index}>
            {value.name + value.value}
          </div>
        );
      })}
    </div>
  );
};
const commands = ["", "", "", "", "", "", "", "", ""];
const OrderDetailCommand = () => {
  return (
    <div className={styles.od_command}>
      {commands.map((value, index) => {
        return <ProductItem key={index + ""} />;
      })}
    </div>
  );
};

const OrderDetailFooter = ({ callAction }) => {
  return (
    <div className={styles.orderDetail_footer_container}>
      {/*<div className={styles.orderItem_bottom_refunding}>{"退款中"}</div>*/}
      <div
        className={styles.orderItem_bottom_delete}
        onClick={() => callAction()}
      >
        {"取消订单"}
      </div>
      <div className={styles.orderItem_bottom_delete}>{"去付款"}</div>
    </div>
  );
};

export default connect(state => {
  return {
    store: state.myorder
  };
})(OrderDetail);
