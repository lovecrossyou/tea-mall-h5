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
import headImg from "./images/photo_headportrait@2x.png";
import rightNext from "./images/center_icon_next@2x.png";

import { Order_All, SelectorBar } from "../myorder";
import { connect } from "dva";
import { OrderList } from "../myorder/OrderList";
import router from "umi/router";

const titleArr = ["店铺", "商品"];

const RepresentStroeHead = () => {
  return (
    <div className={styles.head_wrapper}>
      <div className={styles.return_icon} onClick={() => router.go(-1)}>
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

class representStroe extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
    this.state = {
      defaultSelect: 0
    };
  }

  renderTabBar = props => {
    return (
      <OptionBar
        listArr={titleArr}
        defaultSelect={this.state.defaultSelect}
        onClick={index => {
          this.setState({ defaultSelect: index });
          props.goToTab(index);
        }}
      />
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.clientHeight}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="representStroe" wrapClass={styles.wrap_body}>
            <RepresentStroeHead />
            <div>
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
                <div className={styles.left_option_wrapper}>
                  <div className={styles.store_details_wrapper}>
                    <div className={styles.store_img}>
                      <img src={headImg} alt="" />
                    </div>
                    <div className={styles.store_info_wrapper}>
                      <div className={styles.store_name}>张一元旗舰店</div>
                      <div className={styles.commodity_price}>在售商品256</div>
                    </div>
                    <div className={styles.goto_store}>
                      <div
                        className={styles.goto_store_text}
                        onClick={() => {
                          router.push("/storeDetails");
                        }}
                      >
                        进店逛逛
                      </div>
                      <div className={styles.goto_store_icon}>
                        <img src={rightNext} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.store_details_wrapper}>
                    <div className={styles.store_img}>
                      <img src={headImg} alt="" />
                    </div>
                    <div className={styles.store_info_wrapper}>
                      <div className={styles.store_name}>张一元旗舰店</div>
                      <div className={styles.commodity_price}>在售商品256</div>
                    </div>
                    <div className={styles.goto_store}>
                      <div className={styles.goto_store_text}>进店逛逛</div>
                      <div className={styles.goto_store_icon}>
                        <img src={rightNext} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.store_details_wrapper}>
                    <div className={styles.store_img}>
                      <img src={headImg} alt="" />
                    </div>
                    <div className={styles.store_info_wrapper}>
                      <div className={styles.store_name}>张一元旗舰店</div>
                      <div className={styles.commodity_price}>在售商品256</div>
                    </div>
                    <div className={styles.goto_store}>
                      <div className={styles.goto_store_text}>进店逛逛</div>
                      <div className={styles.goto_store_icon}>
                        <img src={rightNext} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>44445588484666841646</div>
              </Tabs>
            </div>
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

export class OptionBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [],
      defaultSelect: 0
    };
  }

  componentWillMount() {
    if (this.props.listArr instanceof Array) {
      this.setState({
        listArr: this.props.listArr,
        defaultSelect: this.props.defaultSelect || 0
      });
    }
  }

  render() {
    return (
      <div className={styles.option_bottom_wrapper}>
        <div className={styles.selectorBar_container}>
          {this.state.listArr.map((value, index) => {
            return (
              <div
                key={"#" + index}
                className={styles.selectorBar_item}
                onClick={() => {
                  this.props.onClick(index);
                }}
              >
                <div className={styles.selectorBar_item_title}>{value}</div>
                {this.props.hideIndicator ? null : (
                  <div
                    className={
                      index === this.props.defaultSelect
                        ? styles.selectorBar_item_indicator
                        : styles.selectorBar_item_indicator_normal
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.representStroe
  };
})(representStroe);
