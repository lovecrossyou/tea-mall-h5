import styles from "../index.css";
import couponIcon from "../images/center_icon_Coupon@2x.png";
import gotoNext from "../images/center_icon_next@2x.png";
import React from "react";

/**
 *日期: 2019-01-15
 *作者: lovecross
 *功能:
 */

export const MeItem = ({ title, subtitle = "", icon, onClick }) => {
  return (
    <div className={styles.person_operation_list} onClick={onClick}>
      <div className={styles.my_order_area_wrapper}>
        <div className={styles.my_order_img}>
          <img src={icon} alt="" style={{ width: "39px", height: "33px" }} />
        </div>
        <div className={styles.my_order_text}>{title}</div>
      </div>
      <div className={styles.all_order_area}>
        <div className={styles.all_order_text}>{subtitle}</div>
        <div className={styles.next_icon}>
          <img src={gotoNext} alt="" />
        </div>
      </div>
    </div>
  );
};
