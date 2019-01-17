import { connect } from "dva";
import React, { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import ScrollWrap from "../../components/scroll";
import { OrderTopProduct } from "./components/OrderComponents";
import { WhiteSpace } from "antd-mobile";
import right_arrow from "../../assets/right_arrow@2x.png";
import router from "umi/router";
/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */
const itemList = [
  { title: "仅退款", sub: "未收到货物，或者与卖家协商同意前提下" },
  { title: "退款退货", sub: "已收到货，需要退还收到的货物" },
  { title: "换货", sub: "已收到货，需要更换收到的货物" }
];
class RefundApply extends PureComponent {
  render() {
    return (
      <div>
        <Navigator title={"退款申请"} />
        <div className={styles.ra_container}>
          <ScrollWrap
            wrapId={"RefundApplyScroll"}
            wrapClass={styles.ra_scroll_container}
          >
            <OrderTopProduct
              data={{
                img:
                  "http://img4.imgtn.bdimg.com/it/u=2769118404,1000928488&fm=15&gp=0.jpg",
                name:
                  "洞庭碧螺春洞庭碧螺春洞庭碧螺春洞庭 碧螺春洞庭碧螺春洞庭碧螺春",
                standard: "规格6小包80g"
              }}
            />
            {itemList.map((value, index) => {
              return (
                <RefundItem
                  key={"#" + index}
                  data={value}
                  itemClick={() => {
                    if (index === 1) {
                      router.push("/myorder/RefundDetail");
                    } else {
                      router.push("/myorder/RefundApplySubmit");
                    }
                  }}
                />
              );
            })}
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
const RefundItem = ({ data, itemClick }) => {
  return (
    <div
      onClick={() => {
        itemClick();
      }}
    >
      <WhiteSpace />
      <div className={styles.ra_item_container}>
        <div className={styles.ra_item_content}>
          <div className={styles.ra_item_content_title}>{data.title}</div>
          <div className={styles.ra_item_content_sub}>{data.sub}</div>
        </div>

        <img src={right_arrow} className={styles.ra_item_arrow} />
      </div>
    </div>
  );
};
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApply);
