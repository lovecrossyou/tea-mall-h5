/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */
import NavBarList from "../../components/navbarlist";
import styles from "./index.css";
import { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
import React from "react";
import ScrollWrap from "../../components/scroll";
import { connect } from "dva";
import { Toast, WhiteSpace, Carousel } from "antd-mobile";

const listArr = ["全部", "待付款", "待发货", "待收货", "待评价"];

class MyOrder extends PureComponent {
  componentWillMount() {
    Toast.loading("loading...", 0);
    this.props.dispatch({
      type: "myorder/getOrderList",
      payload: {}
    });
    setTimeout(() => {
      Toast.hide();
    }, 2000);
  }

  render() {
    const { orderList } = this.props.store;
    return (
      <div style={{ backgroundColor: "#f4f8fb" }}>
        <div className={styles.order_topView}>
          <Navigator title={"我的订单"} />
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "#cccccc" }}
          />
          <SelectorBar listArr={listArr} defaultSelect={0} />
        </div>

        <ScrollWrap wrapId="myOrder_scroll" wrapClass={styles.myOrder_scroll}>
          <Order_All dataArr={orderList} />
        </ScrollWrap>
      </div>
    );
  }
}
export class Order_All extends PureComponent {
  componentWillMount() {}
  render() {
    console.log(
      "dataArr=========" + JSON.stringify(JSON.stringify(this.props.dataArr))
    );
    return (
      <div>
        {this.props.dataArr.map((value, index) => {
          return <OrderListItem data={value} key={index + "#"} />;
        })}
      </div>
    );
  }
}
const OrderListItem = ({ data }) => {
  return (
    <div>
      <WhiteSpace />
      <div className={styles.orderItem_container}>
        <div className={styles.orderItem_top}>
          <div className={styles.orderItem_top_name}>{data.shopName}</div>
          <div className={styles.orderItem_top_statusDes}>
            {data.orderStatusDes}
          </div>
        </div>

        <div className={styles.orderItem_middle}>
          <img className={styles.orderItem_middle_img} src={data.productImg} />
          <div className={styles.orderItem_middle_right}>
            <div className={styles.orderItem_middle_right_product}>
              <div className={styles.orderItem_middle_right_productName}>
                {data.productName}
              </div>
              <div className={styles.orderItem_middle_product_price_container}>
                <div className={styles.orderItem_middle_product_price}>
                  {"¥" + data.productPrice / 100}
                </div>
                <div className={styles.orderItem_middle_product_number}>
                  {"x" + data.productNumber}
                </div>
              </div>
            </div>
            <div className={styles.orderItem_middle_right_bottom_totoal}>
              {"共" +
                data.productNumber +
                "件商品 " +
                "合计¥" +
                data.totoalPrice / 100 +
                "(含运费¥" +
                data.postagePrice / 100 +
                ")"}
            </div>
          </div>
        </div>

        <div className={styles.orderItem_middle_line} />
        <div className={styles.orderItem_bottom}>
          <div className={styles.orderItem_bottom_delete}>{"追加评论"}</div>
          <div className={styles.orderItem_bottom_delete}>{"删除订单"}</div>
        </div>
      </div>
    </div>
  );
};
export class SelectorBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [],
      defaultSelect: 0
    };
  }
  componentWillMount() {
    if (this.props.listArr instanceof Array) {
      this.setState({
        listArr: this.props.listArr,
        defaultSelect: this.props.defaultSelect || 0
      });
    }
  }

  render() {
    return (
      <div className={styles.selectorBar_container}>
        {this.state.listArr.map((value, index) => {
          return (
            <div
              key={"#" + index}
              className={styles.selectorBar_item}
              onClick={() => {
                this.setState({ defaultSelect: index });
              }}
            >
              <div className={styles.selectorBar_item_title}>{value}</div>
              <div
                className={
                  index === this.state.defaultSelect
                    ? styles.selectorBar_item_indicator
                    : styles.selectorBar_item_indicator_normal
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.myorder
  };
})(MyOrder);
