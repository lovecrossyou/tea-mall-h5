/**
 *日期: 2019-01-14
 *作者: lovecross
 *功能:
 */
import { Component } from "react";
import React from "react";
import styles from "./index.css";

export default class NavBarList  extends Component{

  state = {
    selectedInd:0
  }

  setSelectIndex= index => {
    this.setState({
      selectedInd:index
    })
  }

  render() {
    const {selectedInd} = this.state;
    return (
      <div className={styles.home_list}>
        {this.props.data.map( (item,index) => {
          return <div key={index}
                      className={ index === selectedInd ? styles.home_list_item_active : styles.home_list_item}
                      onClick={this.setSelectIndex.bind(this,index)}>{item}</div>
        })
        }
      </div>
    )
  }
}