import React from 'react'
import styles from './index.less'
import Link from 'umi/link';

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/category"><h2>分类管理-搜索模块 【店铺详情】</h2></Link>
        <Link to="/home"><h2>首页【支付订单流程】</h2></Link>
        <Link to="/product"><h2>商品模块 【评论模块</h2></Link>
        <Link to="/limitbuy"><h2>限时秒杀 【地址管理模块】</h2></Link>
      </div>
    );
  }
}
