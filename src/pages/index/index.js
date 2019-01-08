import React from 'react'
import styles from './index.less'
import Link from 'umi/link';

export default class Index extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/category"><div className={styles.item}>分类管理-搜索模块 【店铺详情】</div></Link>
        <Link to="/home"><div className={styles.item}>首页【支付订单流程】</div></Link>
        <Link to="/product"><div className={styles.item}>商品模块 【评论模块</div></Link>
        <Link to="/limitbuy"><div className={styles.item}>限时秒杀 【地址管理模块】</div></Link>
      </div>
    );
  }
}
