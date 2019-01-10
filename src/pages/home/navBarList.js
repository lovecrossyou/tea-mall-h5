import React from 'react';
import {connect} from 'dva';
import styles from './index.css';


function NavBarList(props){
  return (
    <div className={styles.home_list}>
      <div className={styles.home_list_item} >精选</div>
      <div className={styles.home_list_item}>绿茶</div>
      <div className={styles.home_list_item}>红茶</div>
      <div className={styles.home_list_item}>黄茶</div>
      <div className={styles.home_list_item}>白茶</div>
      <div className={styles.home_list_item}>青茶</div>
      <div className={styles.home_list_item}>黑茶</div>
    </div>
  )
}
export default connect( state => {
  return {
    store:state.classify
  }
})(NavBarList)