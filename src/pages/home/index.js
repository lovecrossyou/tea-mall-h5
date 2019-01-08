import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './index.css';

import mall_classification from './image/mall_classification@2x.png';
import mall_icon_search from './image/mall_icon_search@2x.png';


class Index extends PureComponent{
  render() {
    console.log(this.props.store);
    return (
      <div className={styles.home_container}>
        <div className={styles.home_header}>
            <div className={styles.home_header_left}>
              <img src={mall_classification} alt=""/>
              <div>分类</div>
            </div>
            <div className={styles.home_header_right}>
              <div className={styles.home_header_right_input}>
                <img src={mall_icon_search} alt=""/>
                <span>大家正在搜：喝茶时间表</span>
              </div>
            </div>
        </div>
        <div className={styles.git}>
          <Carousel
            autoplay={false}
            infinite
          >

          </Carousel>
        </div>
      </div>
    );
  }
}
export default connect(state=>{
  return {
    store:state.classify
  }
})(Index)