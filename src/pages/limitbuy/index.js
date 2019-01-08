import React, { PureComponent } from 'react';
import styles from './index.less';
import { TabBar } from 'antd-mobile';
import Swiper from 'react-id-swiper';

export default class Index extends PureComponent {

  render() {
    const params = {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      }
    }


    return (
      <div className={styles.container}>
        <div>
          <Swiper {...params}>
            <div >Slide 1</div>
            <div >Slide 1</div>
            <div >Slide 1</div>
            <div >Slide 1</div>
          </Swiper>
        </div>
      </div>
    );
  }
}
