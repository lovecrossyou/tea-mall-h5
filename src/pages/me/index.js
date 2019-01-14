/**
 *日期: 2019-01-14
 *作者: lovecross
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.less";


const Header = ()=>{
  return <div className={styles.header_bg}>
    <div className={styles.header_name}>卡古拉</div>
  </div>
}

export default class Me extends PureComponent{
  render() {
    return <div>
      <Header/>
    </div>
  }
}

