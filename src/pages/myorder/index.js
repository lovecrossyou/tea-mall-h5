/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */

import styles from "./index.css";
import { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
import React from "react";
import { connect } from "dva";
import { Toast, Tabs } from "antd-mobile";
import { OrderList } from "./OrderList";

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
            <OrderList dataArr={orderList} wrapId={"myOrder_scroll_all1"} />
            <OrderList dataArr={orderList} wrapId={"myOrder_scroll_all2"} />
            <OrderList dataArr={orderList} wrapId={"myOrder_scroll_all3"} />
            <OrderList dataArr={orderList} wrapId={"myOrder_scroll_all4"} />
            <OrderList dataArr={orderList} wrapId={"myOrder_scroll_all5"} />
          </Tabs>
        </div>
      </div>
    );
  }
}
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
    let tabBgCls = this.props.tabBgCls;
    let backgroundColor = "#fff";
    if (tabBgCls !== undefined) {
      backgroundColor = tabBgCls.backgroundColor;
    }
    return (
      <div
        className={styles.selectorBar_container}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
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
