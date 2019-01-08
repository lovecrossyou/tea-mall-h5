/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:39:02
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:03:00
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './index.less';

@connect(({ category, loading }) => ({
  category,
  loading
}))

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  getRef = e => {
    this.container = React.cloneElement(e);
  };


  render() {
    return (
      <div>
        分类
      </div>
    );
  }
}

export default Category;
