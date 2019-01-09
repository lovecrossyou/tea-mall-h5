import { PureComponent } from "react";
import styles from "./index.less";
import React from "react";
import { Navigator } from "../../layouts/navigator";

export default class ConfirmOrder extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Navigator/>
      </div>
    );
  }
}
