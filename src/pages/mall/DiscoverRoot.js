/**
 *Created by tianhaojie .
 *Created on 2019-01-21 .
 *desc
 */
import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import found_btn_search from "./image/found_btn_search@2x.png";
import found_btn_nolike from "./image/found_btn_nolike@2x.png";
import water1 from "./image/1.jpg";
import NavBarList from "../../components/navbarlist";
import { Tabs } from "antd-mobile";
import Recommend from "./Recommend";

const navList = ["发现", "关注"];
const listArr = ["推荐", "视频", "斗茶", "约茶", "茶具", "生活"];

export default class DiscoverRoot extends PureComponent {
  renderTabBar = props => {
    return <NavBarList data={listArr} activeCls={{ color: "#333333" }} />;
  };
  render() {
    return (
      <div>
        <Tabs
          tabs={listArr}
          initialPage={0}
          animated={true}
          useOnPan={true}
          distanceToChangeTab={0.5}
          renderTabBar={this.renderTabBar}
          onChange={(tab, index) => {
            this.setState({ defaultSelect: index });
          }}
        >
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
        </Tabs>
      </div>
    );
  }
}
const WaterFallView = function() {
  return (
    <div className={styles.water_fail_view}>
      <Recommend />
      <Recommend />
    </div>
  );
};
