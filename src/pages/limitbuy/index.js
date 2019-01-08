import React, { PureComponent } from "react";
import styles from "./index.less";
import { TabBar } from "antd-mobile";
import Swiper from "react-id-swiper";

import header_bg from "./image/goodtea_top_bg@2x.png";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_title}>好茶试饮</div>
      <div className={styles.header_subtitle}>
        新用户福利 人气种草好茶免费送
      </div>
    </div>
  );
};

export default class Index extends PureComponent {
  render() {
    const params = {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      },
      containerClass: "limit_swiper_container"
    };

    return (
      <div className={styles.container}>
        <Header />
      </div>
    );
  }
}
