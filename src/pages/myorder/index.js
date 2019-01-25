/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */

import styles from "./index.css";
import { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
import React from "react";
import ScrollWrap from "../../components/scroll";
import { connect } from "dva";
import { Toast, WhiteSpace, Carousel, Tabs } from "antd-mobile";
import router from "umi/router";

const titleArr = ["全部", "待付款", "待发货", "待收货", "待评价"];
class MyOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelect: 0
    };
  }

  componentWillMount() {
    this.setState({
      defaultSelect: parseInt(this.props.location.query.defaultSelect || 0)
    });
    Toast.loading("loading...", 0);
    this.props.dispatch({
      type: "myorder/getOrderList",
      payload: {}
    });
    setTimeout(() => {
      Toast.hide();
    }, 1000);
  }

  renderTabBar = props => {
    return (
      <SelectorBar
        listArr={titleArr}
        defaultSelect={this.state.defaultSelect}
        onClick={index => {
          this.setState({ defaultSelect: index });
          props.goToTab(index);
        }}
      />
    );
  };
  render() {
    const { orderList } = this.props.store;
    return (
      <div style={{ backgroundColor: "#f4f8fb" }}>
        <div className={styles.order_topView}>
          <Navigator title={"我的订单"} />
        </div>

        <div className={styles.tabbar_container}>
          <Tabs
            tabs={titleArr}
            initialPage={this.props.location.query.defaultSelect || 0}
            animated={true}
            useOnPan={true}
            distanceToChangeTab={0.5}
            renderTabBar={this.renderTabBar}
            onChange={(tab, index) => {
              this.setState({ defaultSelect: index });
            }}
          >
            <Order_All dataArr={orderList} wrapId={"myOrder_scroll_all1"} />
            <Order_All dataArr={orderList} wrapId={"myOrder_scroll_all2"} />
            <Order_All dataArr={orderList} wrapId={"myOrder_scroll_all3"} />
            <Order_All dataArr={orderList} wrapId={"myOrder_scroll_all4"} />
            <Order_All dataArr={orderList} wrapId={"myOrder_scroll_all5"} />
          </Tabs>
        </div>
      </div>
    );
  }
}
export class Order_All extends PureComponent {
  componentWillMount() {}
  render() {
    return (
      <div className={styles.order_all_container}>
        <ScrollWrap
          wrapId={this.props.wrapId}
          wrapClass={styles.myOrder_scroll}
        >
          {this.props.dataArr.map((value, index) => {
            return (
              <div
                key={index + "#"}
                onClick={() => {
                  router.push("myorder/OrderDetail");
                }}
              >
                <OrderListItem data={value} />
                <OrderItemFooter />
              </div>
            );
          })}
        </ScrollWrap>
      </div>
    );
  }
}
export class OrderListItem extends PureComponent {
  render() {
    const { data } = this.props;
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
            <img
              className={styles.orderItem_middle_img}
              src={data.productImg}
            />
            <div className={styles.orderItem_middle_right}>
              <div className={styles.orderItem_middle_right_product}>
                <div className={styles.orderItem_middle_right_productName}>
                  {data.productName}
                </div>
                <div
                  className={styles.orderItem_middle_product_price_container}
                >
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
        </div>
      </div>
    );
  }
}
const OrderItemFooter = () => {
  return (
    <div className={styles.orderItem_footer_container}>
      <div className={styles.orderItem_middle_line} />
      <div className={styles.orderItem_bottom}>
        <div className={styles.orderItem_bottom_delete}>{"追加评论"}</div>
        <div className={styles.orderItem_bottom_delete}>{"删除订单"}</div>
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
                this.props.onClick(index);
              }}
            >
              <div className={styles.selectorBar_item_title}>{value}</div>
              {this.props.hideIndicator ? null : (
                <div
                  className={
                    index === this.props.defaultSelect
                      ? styles.selectorBar_item_indicator
                      : styles.selectorBar_item_indicator_normal
                  }
                />
              )}
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
