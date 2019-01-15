/**
 *日期: 2019/1/11
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import backIcon from "./images/store_top_icon_return@2x.png";
import classfiyIcon from "./images/store_top_icon_classification@2x.png";
import storeImg from "./images/store_logo@2x.png";
import attentionImg from "./images/store_Focus@2x.png";
import storeBanner from "./images/store_banner@2x.png";
import discountBg from "./images/store_coupon_bg@2x.png";
import imsgIcon from "./images/store_bottom_service@2x.png";

import router from "umi/router";
import NavBarList from "../../components/navbarlist";
import { ProductItem } from "../home";
import ScrollWrap from "../../components/scroll";

const listArr = ["首页", "新品", "热门", "活动"];

//头部搜索 & 店铺信息
const SearchArea = () => {
  return (
    <div className={styles.top_area}>
      <div className={styles.top_search}>
        <div className={styles.back_icon} onClick={()=>router.go(-1)}>
          <img src={backIcon} alt="" />
        </div>
        <div className={styles.top_search_input}>
          <input type="text" placeholder="搜索店铺内商品" />
        </div>
        <div className={styles.classfiy_icon}>
          <div>
            <img src={classfiyIcon} alt="" />
          </div>
          <div className={styles.classfiy_text}>分类</div>
        </div>
      </div>
      <div className={styles.store_info}>
        <div className={styles.store_info_left}>
          <div className={styles.store_img}>
            <img src={storeImg} alt="" />
          </div>
          <div className={styles.store_name_area}>
            <div className={styles.store_name}>张一元旗舰店</div>
            <p className={styles.store_fans}>粉丝数21.5万</p>
          </div>
        </div>
        <div className={styles.store_attention}>
          <img src={attentionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

// 底部
const FooterOption = () => {
  return (
    <div className={styles.footer_option_wrapper}>
      <div className={styles.footer_option}>
        <div className={styles.imsg_icon}>
          <img src={imsgIcon} alt="" />
        </div>
        <div>客服</div>
      </div>
      <div className={styles.footer_option}>宝贝分类</div>
      <div className={styles.footer_option}>热销商品</div>
    </div>
  );
};

class storeDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      needIndex: 0
    };

    this.clientHeight = window.document.body.clientHeight;
  }

  handleClick(e) {
    this.setState({
      needIndex: e
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <SearchArea />
        {/*tab*/}
        <div className={styles.store_classify_area}>
          <div className={styles.nav_bar_list}>
            <NavBarList data={listArr} />
          </div>
        </div>

        <div
          style={{
            height: `${this.clientHeight - 469 - 132 - 102}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="lefttList" wrapClass={styles.wrap_body}>
            {/*banner*/}
            <div className={styles.store_banner}>
              <img src={storeBanner} alt="" />
            </div>

            {/*优惠券*/}
            <div className={styles.discount_wrapper}>
              <div className={styles.discount_img_area}>
                <img src={discountBg} alt="" className={styles.discount_img} />
                <div className={styles.discount_position}>
                  <div className={styles.discount_price_area}>
                    <div className={styles.discount_price_symbol}>¥</div>
                    <div className={styles.discount_price}>20</div>
                  </div>
                  <div className={styles.discount_info}>
                    <div className={styles.discount_top_text}>领取优惠券</div>
                    <div className={styles.discount_bottom_text}>满199可用</div>
                  </div>
                </div>
              </div>
              <div className={styles.discount_img_area}>
                <img src={discountBg} alt="" className={styles.discount_img} />
                <div className={styles.discount_position}>
                  <div className={styles.discount_price_area}>
                    <div className={styles.discount_price_symbol}>¥</div>
                    <div className={styles.discount_price}>20</div>
                  </div>
                  <div className={styles.discount_info}>
                    <div className={styles.discount_top_text}>领取优惠券</div>
                    <div className={styles.discount_bottom_text}>满199可用</div>
                  </div>
                </div>
              </div>
            </div>
            {/*商品列表*/}
            <div className={styles.product_wrapper}>
              <ProductItem onClick={() => router.push("/limitbuy")} />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </ScrollWrap>
        </div>
        {/*底部*/}
        <FooterOption />
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.storeDetails
  };
})(storeDetails);
