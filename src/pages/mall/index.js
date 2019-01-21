import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import found_btn_search from "./image/found_btn_search@2x.png";

import NavBarList from "../../components/navbarlist";
import { Tabs } from "antd-mobile";
import Discoverroot from "./discoverroot";
import Focus from "./focus";

const navList = ["发现", "关注"];

const TopNav = ({onChange})=>{
  return (
    <div className={styles.tea_mall_nav} onClick={onChange}>
      <div className={styles.tea_mall_nav_left}>
        <NavBarList
          data={navList}
          activeCls={{
            color: "#333333",
            fontSize: "44px",
            borderBottom: "6px solid red"
          }}
          onChange={onChange}
        />
      </div>
      <div className={styles.tea_mall_nav_right}>
        <div className={styles.found_btn_search_img}>
          <img src={found_btn_search} alt="" />
        </div>
        <div>搜索</div>
      </div>
    </div>
  );
};
// const tabs = ["发现", "关注"];
const tabs = [
  { title: '发现' },
  { title: '关注' },
];

export default class Mall extends PureComponent {

  renderTabBar = props => {
    return <TopNav onChange={index => {
      console.log('TopNav ',index);
      this.setState({ defaultSelect: index });
      props.goToTab(index);
    }}/>;
  };

  state = {
    defaultSelect:0
  }

  render() {
    return (
      <div className={styles.tea_mall_container}>
        <Tabs
          tabs={tabs}
          initialPage={this.state.defaultSelect}
          animated={true}
          useOnPan={true}
          distanceToChangeTab={0.5}
          renderTabBar={this.renderTabBar}
          swipeable={false}
          onChange={(tab, index) => {
            this.setState({ defaultSelect: index });
          }}
        >
          <Discoverroot />
          <Focus />
        </Tabs>
      </div>
    );
  }
}
