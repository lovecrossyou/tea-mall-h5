/**
 *日期: 2019-01-11
 *作者: lovecross
 *功能: 模态组件
 */
import { Component } from "react";
import React from "react";

import styles from "./index.css";

export default class ModalBox extends Component {
  render() {
    const { position, visible, onClose } = this.props;
    if (visible === false) return null;
    let contenStyle = styles.model_content_bottom;
    if (position === "top") {
      contenStyle = styles.model_content_top;
    } else if (position === "center") {
      contenStyle = styles.model_content_center;
    } else {
      contenStyle = styles.model_content_bottom;
    }

    return (
      <div>
        <div className={styles.model_wrapper} onClick={onClose} />
        <div className={contenStyle}>{this.props.children}</div>
      </div>
    );
  }
}
