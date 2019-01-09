import router from "umi/router";

import styles from "./index.css";
import nav_left_arrow from "./images/order_top_icon_return@2x.png";

export const Navigator = ({title=''}) => {
  return <div className={styles.nav}>
    <img
      onClick={() => {
        router.go(-1);
      }}
      src={nav_left_arrow}
      alt=""
      style={{ width: "19px", height: "36px" }}/>
    <div className={styles.nav_title}>{title}</div>
    <div></div>
  </div>;
};
