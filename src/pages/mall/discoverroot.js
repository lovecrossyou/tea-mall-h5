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
import Recommend from "./recommend";
import TeaFight from "../teaFight";
import Movie from "./movie";
import Teaset from "./teaset";
import Life from "./life";
import TeaPoint from "./teapoint";

const tabs = [
  { title: '推荐' },
  { title: '视频' },
  { title: '斗茶' },
  { title: '约茶' },
  { title: '茶具' },
  { title: '生活' },
];


export default class Discoverroot extends PureComponent {

  renderTabBar = props => {
    return <NavBarList data={listArr} activeCls={{ color: "#333333" }}/>;
  };

  render() {
    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          animated={true}
          useOnPan={true}
          distanceToChangeTab={0.5}
          tabBarActiveTextColor='#333'
          tabBarUnderlineStyle={{color:'#00000000'}}
          onChange={(tab, index) => {
            this.setState({ defaultSelect: index });
          }}
        >
          <Recommend/>
          <Movie/>
          <TeaFight/>
          <TeaPoint/>
          <Teaset/>
          <Life/>
        </Tabs>
      </div>
    );
  }
}
