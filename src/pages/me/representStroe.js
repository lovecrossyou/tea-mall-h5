/**
 *日期: 2019/2/13
 *作者: xiannvrong
 *功能:
 */

import { PureComponent } from "react";
import styles from "./representStroe.css";
import ScrollWrap from "../../components/scroll";
import React from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";

import backIcon from "./images/btn_return@2x.png";
import zhulizhe from "../mall/image/zhulizhe.jpg";
import { Order_All, SelectorBar } from "../myorder";

const titleArr = ["店铺", "商品"];

const RepresentStroeHead = () => {
  return (
    <div className={styles.head_wrapper}>
      <div className={styles.return_icon}>
        <img src={backIcon} alt="" />
      </div>

      {/*个人*/}
      <div className={styles.person_info_wrapper}>
        <div className={styles.haeder_img}>
          <img src={zhulizhe} alt="" />
        </div>
        <div className={styles.info_left}>
          <div className={styles.user_name}>有魔法</div>
          <div className={styles.represent_info}>
            <div className={styles.represent_commodity}>代言56款商品</div>
            <div className={styles.represent_store}>5个店铺</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class representStroe extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
    this.state = {
      defaultSelect: 0
    };
  }

  renderTabBar = props => {
    return (
      <SelectorBar
        listArr={titleArr}
        defaultSelect={this.state.defaultSelect}
        onClick={index => {
          this.setState({ defaultSelect: index });
          props.goToTab(index);
        }}
        tabBgCls={tabBg}
      />
    );
  };
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.clientHeight - 150}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="representStroe" wrapClass={styles.wrap_body}>
            <RepresentStroeHead />
            <div className={styles.option_tab_wrapper}>
              <Tabs
                tabs={titleArr}
                initialPage={this.props.location.query.defaultSelect || 0}
                animated={true}
                useOnPan={true}
                distanceToChangeTab={0.5}
                renderTabBar={this.renderTabBar}
                onChange={(tab, index) => {
                  this.setState({ defaultSelect: index });
                }}
              >
                <div className={styles.store_info}>111</div>
                <div className={styles.commodity_info}>222</div>
              </Tabs>
            </div>
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
