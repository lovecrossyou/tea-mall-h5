import React, { Component } from "react";
import styles from "./appraise.less";
import { Navigator } from "../../components/navigator";
import Scroll from "../../components/scroll/scroll";

export default class Appraise extends Component {
  handlePullingDown = () => {
    setTimeout(() => {
      this.scroll && this.scroll.forceUpdate();
    }, 2000);
  };

  handlePullingUp = () => {
    setTimeout(() => {
      this.scroll && this.scroll.forceUpdate();
    }, 2000);
  };

  render() {
    const scrollProps = {
      className: styles.appraise_scroll,
      dataSource: ["1", "2"],
      pullDownRefresh: { stop: 40 },
      pullUpLoad: true,
      pullingDown: this.handlePullingDown,
      pullingUp: this.handlePullingUp
    };
    return (
      <div>
        <Navigator title={"发表评价"} />
        <div className={styles.appraise_container}>
          <Scroll {...scrollProps} ref={c => (this.scroll = c)}>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
            <div>11</div>
          </Scroll>
        </div>
      </div>
    );
  }
}
