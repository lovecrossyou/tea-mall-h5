import React from 'react';
import {connect} from 'dva';
import styles from '../index.css';

function NavBarList(props){
  const {selectedInd} = props.store;

  return (
    <div className={styles.home_list}>
      {props.data.map( (item,index) => {
          return <div key={index}
                      className={ index === selectedInd ? styles.home_list_item_active : styles.home_list_item}
                      onClick={()=>{
                        console.log("selectedInd",selectedInd)
                        props.dispatch({
                          type:'classify/setActive',
                          payload:index
                        })
                }}>{item}</div>
        })
      }
    </div>
  )
}
export default connect( state => {
  return {
    store:state.classify
  }
})(NavBarList)
