import React from 'react';
import { connect } from 'dva';
import styles from './payloadResult.css';
import pay_icon_success from './images/pay_icon_success@2x.png';
import { HotRecommendShow, ProductItem } from "../home";

function PayloadResult(){
  return <div className={styles.pay_load_result_container}>
    <div className={styles.pay_load_result}>
      <div className={styles.pay_load_result_tit}>
        <img src={pay_icon_success} alt=""/>支付成功</div>
      <div className={styles.pay_load_result_intro}>实付款：127元</div>
      <div className={styles.pay_load_result_share}>
        <div>自己喝</div>
        <div>送好友</div>
      </div>
    </div>
    <div className={styles.hot_recommend}>
      <div className={styles.hot_recommend_tit}>--- 热门推荐 ---</div>
      <HotRecommendShow/>
    </div>
  </div>
}

export default connect(()=>{
  return {

  }
})(PayloadResult)