import router from "umi/router";

import styles from "../layouts/index.css";
import nav_left_arrow from "../layouts/images/order_top_icon_return@2x.png";

export const Navigator = ({title='',right=null}) => {
  return <div className={styles.nav}>
    <img
      onClick={() => {
        router.go(-1);
      }}
      src={nav_left_arrow}
      alt=""
      className={styles.nav_arrow}/>
    <div className={styles.nav_title}>{title}</div>
    <div>
      {right? right : null}
    </div>
  </div>;
};
