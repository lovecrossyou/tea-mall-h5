/**
 *Created by tianhaojie .
 *Created on 2019-01-16 .
 *desc
 */
import React, { PureComponent } from "react";
import styles from "./components.css";
export class OrderTopProduct extends PureComponent {
  render() {
    let data = this.props.data || {};
    let orderTopProduct_style =
      this.props.orderTopProduct || styles.orderTopProduct;
    return (
      <div className={orderTopProduct_style}>
        <img src={data.img || ""} className={styles.orderTopProduct_img} />
        <div className={styles.orderTopProduct_content}>
          <div className={styles.orderTopProduct_content_name}>{data.name}</div>
          <div className={styles.orderTopProduct_content_standard}>
            {data.standard}
          </div>
        </div>
      </div>
    );
  }
}
