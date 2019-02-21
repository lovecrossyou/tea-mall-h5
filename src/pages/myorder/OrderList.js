import styles from "./index.css";
import { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
import React from "react";
import ScrollWrap from "../../components/scroll";
import { connect } from "dva";
import { Toast, WhiteSpace, Carousel, Tabs } from "antd-mobile";
import router from "umi/router";
import Scroll from "../../components/scroll/scroll";

export class OrderList extends PureComponent {
  componentWillMount() {}

  handlePullingDown = () => {
    setTimeout(() => {
      this.scroll && this.scroll.forceUpdate();
    }, 2000);
  };

  handlePullingUp = () => {
    setTimeout(() => {
      this.scroll && this.scroll.forceUpdate();
    }, 2000);
  };
  footerClick(index) {
    switch (index) {
      case 0:
        break;
      case 1:
        router.push("myorder/Appraise");
        break;
      default:
    }
  }
  render() {
    const scrollProps = {
      className: styles.myOrder_scroll,
      dataSource: this.props.dataArr,
      pullDownRefresh: { stop: 40 },
      pullUpLoad: true,
      pullingDown: this.handlePullingDown,
      pullingUp: this.handlePullingUp
    };
    return (
      <div className={styles.order_all_container}>
        <Scroll {...scrollProps} ref={c => (this.scroll = c)}>
          {this.props.dataArr.map((value, index) => {
            return (
              <div key={index + "#"}>
                <OrderListItem
                  data={value}
                  onClick={() => {
                    router.push("myorder/OrderDetail");
                  }}
                />
                <OrderItemFooter
                  data={value}
                  footerClick={this.footerClick.bind(this)}
                />
              </div>
            );
          })}
        </Scroll>
        {/* <ScrollWrap
          wrapId={this.props.wrapId}
          wrapClass={styles.myOrder_scroll}
        >

        </ScrollWrap> */}
      </div>
    );
  }
}
export class OrderListItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div onClick={() => this.props.onClick()}>
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
const OrderItemFooter = ({ data, footerClick }) => {
  const { orderStatus } = data;
  return (
    <div className={styles.orderItem_footer_container}>
      <div className={styles.orderItem_middle_line} />
      <div className={styles.orderItem_bottom}>
        <div className={styles.orderItem_bottom_delete}>{"删除订单"}</div>
        <div
          className={
            orderStatus === "success"
              ? styles.orderItem_bottom_brillancy
              : styles.orderItem_bottom_delete
          }
          onClick={() => {
            footerClick(1);
          }}
        >
          {"评价"}
        </div>
      </div>
    </div>
  );
};
