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
            <RefundExplain />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
const RefundExplain = () => {
  return (
    <div>
      <WhiteSpace />
      <div className={styles.refundExplain}>
        <div className={styles.refundExplain_title_c}>
          <div className={styles.refundExplain_title}>{"退款说明："}</div>
          <div className={styles.refundExplain_title_p}>{"选填"}</div>
        </div>
        <TextareaItem
          style={{fontSize:'20px'}}
          clear={true}
          placeholder="请输入"
          autoHeight={true}
          className={styles.explain_textareaItem}
        />
      </div>
    </div>
  );
};
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApplySubmit);
