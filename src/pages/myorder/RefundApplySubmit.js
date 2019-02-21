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
import { WhiteSpace, TextareaItem, ImagePicker } from "antd-mobile";
import right_arrow from "../../assets/right_arrow@2x.png";
import ReasonModal from "./components/ReasonModal";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}
class RefundApplySubmit extends PureComponent {
  state = {
    reason: "请选择"
  };
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
            <RefundReason
              reason={this.state.reason}
              clickAction={() => {
                this.reasonModal._open();
              }}
            />
            <RefundExplain />
            <WhiteSpace />
            <RefundMoney />
            <WhiteSpace />
            <UploadImage />
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
const RefundReason = ({ reason, clickAction }) => {
  return (
    <div className={styles.ras_reason_c}>
      <div className={styles.refundExplain_title}>退货原因</div>
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
export const RefundMoney = () => {
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
          moneykeyboardwrapprops={moneyKeyboardWrapProps}
        />
      </div>
    </div>
  );
};
const data = [];
class UploadImage extends PureComponent {
  state = {
    files: data,
    multiple: false
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };
  render() {
    const { files } = this.state;
    return (
      <div className={styles.uploadImage}>
        <div className={styles.uploadImage_title}>上传凭证</div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs[index].url)}
          selectable={files.length < 9}
          multiple={this.state.multiple}
        />
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApplySubmit);
