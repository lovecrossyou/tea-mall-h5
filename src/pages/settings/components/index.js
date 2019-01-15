import styles from "../../settings/index.css";
import gotoNext from "../../me/images/center_icon_next@2x.png";
import React from "react";

/**
 *日期: 2019/1/15
 *作者: xiannvrong
 *功能:
 */

export const SettingsItem = ({ title, icon, onClick }) => {
  return (
    <div className={styles.settings_operation_list} onClick={onClick}>
      <div className={styles.settings_text}>{title}</div>
      <div className={styles.go_next_icon}>
        <img src={gotoNext} alt="" />
      </div>
    </div>
  );
};
