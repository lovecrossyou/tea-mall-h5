import { PureComponent } from "react";
import styles from "./components.css";
import React from "react";
import ModalBox from "../../../components/modal";

/**
 *Created by tianhaojie .
 *Created on 2019-01-24 .
 *desc
 */

export default class ReasonModal extends PureComponent {
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
