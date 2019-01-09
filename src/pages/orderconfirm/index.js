import { PureComponent } from "react";
import styles from "./index.less";
import React from "react";
import { Navigator } from "../../layouts/navigator";


const OrderContent = ()=>{
  return <div className={styles.ordercontent}>

  </div>
}

export default class OrderConfirm extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Navigator/>
        <OrderContent/>
      </div>
    );
  }
}
