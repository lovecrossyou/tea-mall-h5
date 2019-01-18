/**
 *Created by tianhaojie .
 *Created on 2019-01-18 .
 *desc
 */
import React, { PureComponent } from "react";
import { connect } from "dva";
import { Navigator } from "../../components/navigator";
import styles from "./refundOrder.css";
import { OrderTopProduct } from "./components/OrderComponents";
import router from "umi/router";
import ScrollWrap from "../../components/scroll";
import { WhiteSpace, InputItem } from "antd-mobile";
import right_arrow from "../../assets/right_arrow@2x.png";
import ModalBox from "../../components/modal";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}

class RefundChooseAddress extends PureComponent {
  state = {
    reason: "请选择"
  };

  render() {
    const {
      type = "text",
      labelNumber = 5,
      error = false,
      children = "",
      onErrorClick = "",
      tipStyle = {},
      ...other
    } = this.props;
    const errorTipStyle = {
      color: "#f5222d",
      padding: "5px 0px",
      textAlign: "left",
      position: "relative",
      fontSize: 12,
      ...tipStyle
    };
    return (
      <div>
        <Navigator
          title={"退货申请"}
          right={<div className={styles.nav_right_ref_chooseAdd}>提交</div>}
        />
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
            <RefundReason
              reason={this.state.reason}
              clickAction={() => {
                this.reasonModal._open();
              }}
            />

            <WhiteSpace />
            <InputOrderNumber />
          </ScrollWrap>
        </div>
        <ReasonModal
          ref={c => (this.reasonModal = c)}
          click={value => {
            this.setState({
              reason: value
            });
          }}
        />
      </div>
    );
  }
}
const InputOrderNumber = () => {
  return (
    <div className={styles.ref_ordernumber}>
      <div className={styles.ref_ordernumber_title}>物流单号</div>
      <input
        placeholder={"请输入单号"}
        className={styles.ref_ordernumber_input}
      />
    </div>
  );
};
const RefundReason = ({ reason, clickAction }) => {
  return (
    <div className={styles.ras_reason_c}>
      <div className={styles.refundExplain_title}>选择物流公司</div>
      <div
        onClick={() => {
          clickAction();
        }}
      >
        <div className={styles.refundExplain_value}>{reason}</div>
        <img src={right_arrow} className={styles.ra_item_arrow} />
      </div>
    </div>
  );
};
class ReasonModal extends PureComponent {
  state = {
    select: -1,
    visible: false
  };

  _open() {
    this.setState({
      visible: true
    });
  }
  _close() {
    this.setState({
      visible: false
    });
  }
  render() {
    const reasonModal_items = ["拍错了/多拍", "质量问题", "描述详情与实物不符"];
    return (
      <ModalBox
        visible={this.state.visible}
        contenStyle_custom={styles.reasonModal}
        onClose={() => {
          this._close();
        }}
      >
        <div className={styles.reasonModal_container}>
          <div className={styles.reasonModal_title}>退款原因</div>
          <div className={styles.reasonModal_item_container}>
            {reasonModal_items.map((value, index) => {
              return (
                <div
                  key={index + "#"}
                  className={styles.reasonModal_item}
                  onClick={() => {
                    this.props.click && this.props.click(value);
                    this.setState({
                      select: index
                    });
                  }}
                >
                  <div className={styles.reasonModal_item_name}>{value}</div>
                  <div
                    className={
                      this.state.select === index
                        ? styles.reasonModal_item_radio_s
                        : styles.reasonModal_item_radio
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </ModalBox>
    );
  }
}
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundChooseAddress);
