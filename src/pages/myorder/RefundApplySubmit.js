/**
 *Created by tianhaojie .
 *Created on 2019-01-16 .
 *desc
 */
import React, { PureComponent } from "react";
import { connect } from "dva";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import { OrderTopProduct } from "./components/OrderComponents";
import router from "umi/router";
import ScrollWrap from "../../components/scroll";
import { WhiteSpace, TextareaItem } from "antd-mobile";
import right_arrow from "../../assets/right_arrow@2x.png";

class RefundApplySubmit extends PureComponent {
  render() {
    return (
      <div>
        <Navigator title={"退货申请"} />
        <div className={styles.ras_container}>
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
            <WhiteSpace />
            <RefundReason />
            <RefundExplain />
            <WhiteSpace />
            <RefundMoney />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
const RefundReason = () => {
  return (
    <div className={styles.ras_reason_c}>
      <div className={styles.refundExplain_title}>退货原因</div>
      <img src={right_arrow} className={styles.ra_item_arrow} />
    </div>
  );
};
const RefundMoney = () => {
  return (
    <div className={styles.ras_money_c}>
      <div className={styles.refundExplain_title}>退款金额：</div>
      <div className={styles.ras_money_nunmber}>{"¥124.50"}</div>
    </div>
  );
};
const RefundExplain = () => {
  return (
    <div>
      <WhiteSpace />
      <div className={styles.refundExplain}>
        <TextareaItem
          title={"退款说明："}
          clear={true}
          autoFocus={true}
          placeholder="选填"
          rows={2}
        />
      </div>
    </div>
  );
};
class UploadImage extends PureComponent {
  render() {
    return <div />;
  }
}
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApplySubmit);
