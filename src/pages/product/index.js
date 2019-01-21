import React, { PureComponent } from "react";
import styles from "./index.css";
import {
  NavBar,
  Icon,
  Button,
  Flex,
  WingBlank,
  WhiteSpace,
  Carousel
} from "antd-mobile";
import ScrollWrap from "../../components/scroll";
import Product_figure from "./image/Product_figure.png";
import CarouselTop from "../../components/carousel";

import router from "umi/router";
import storeInProduct_contentimg1 from "./image/storeInProduct_contentimg1.png";
import storeInProduct_contentimg2 from "./image/storeInProduct_contentimg2.png";
import storeInProduct_contentimg3 from "./image/storeInProduct_contentimg3.png";
import bottom_icon_mall from "./image/bottom_icon_mall@2x.png";
import bottom_icon_service from "./image/bottom_icon_service@2x.png";
import icon_return from "./image/icon_return@2x.png";
import icon_share from "./image/icon_share@2x.png";
import { ProductItem } from "../home";
import ModalBox from "../../components/modal";
import { connect } from "dva";

const storeInProduct_contentimgs = [
  storeInProduct_contentimg1,
  storeInProduct_contentimg2,
  storeInProduct_contentimg3
];

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }
  componentDidMount() {
    console.log("xxxxxxx====" + JSON.stringify(this.props.store));
    this.props.dispatch({
      type: "product/getBannerList",
      payload: {}
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <ProductNav
          onBack={() => {
            router.go(-1);
          }}
          rightAction={() => {}}
        />
        <ScrollWrap wrapId="product_scroll" wrapClass={styles.product_scroll}>
          <div style={{ width: "100%", backgroundColor: "#fff" }}>
            <CarouselTop
              clsName={styles.carouselStyle}
              imgs={[Product_figure, Product_figure, Product_figure]}
            />
          </div>

          <ProductInfo />
          <WhiteSpace />
          <ProductRowSelectItem
            dic={{
              title: "产品参数：",
              content: "领取新人专享福利",
              arrow: true
            }}
          />
          <Product_Line />
          <ProductRowSelectItem
            dic={{
              title: "优惠券：",
              content: "满50-100  满300-80  满200-50",
              arrow: true
            }}
          />
          <Product_Line />
          <ProductRowSelectItem
            dic={{ title: "运费：", content: "包邮", arrow: false }}
          />
          <Product_Line />
          <ProductRowSelectItem
            dic={{ title: "产品参数：", content: "", arrow: true }}
          />
          <WhiteSpace />

          {/*商品评价*/}
          <ProductAppraise />
          <WhiteSpace />
          {/*商品店铺*/}
          <StoreInProduct />
          <WhiteSpace />
          <ProductCommend />
        </ScrollWrap>

        <ProductTabbar
          toShoppingCart={() => {
            this._productParameterChoose._openModal();
          }}
          toBuy={() => {
            this._productParameterChoose._openModal();
          }}
        />

        <ProductParameterChoose ref={c => (this._productParameterChoose = c)} />
      </div>
    );
  }
}
const ProductInfo = () => {
  return (
    <div className={styles.product_info}>
      <div className={styles.price_info_wrapper}>
        <div className={styles.price_now}>￥125</div>
        <div className={styles.price_origin}>￥125</div>
      </div>
      <div className={styles.product_name}>
        2018新茶西湖牌龙井茶叶正宗雨前西湖龙井茶茶纸包春茶绿茶250g
      </div>

      <div className={styles.product_mark}>
        <img
          className={styles.product_mark_img}
          src={require("./image/product_mark.png")}
        />
      </div>
    </div>
  );
};
const Product_Line = () => {
  return (
    <div className={styles.product_item_line_container}>
      <div className={styles.product_item_line} />
    </div>
  );
};
const ProductRowSelectItem = ({ dic, style = {} }) => {
  return (
    <div className={styles.product_item_container}>
      <div className={styles.product_display_row}>
        <div className={styles.product_item_title} style={style}>
          {dic.title}
        </div>
        <div className={styles.product_item_content}>{dic.content}</div>
      </div>
      <img
        hidden={!dic.arrow}
        className={styles.product_item_arrow}
        src={require("./image/produt_item_icon_next.png")}
      />
    </div>
  );
};

class ProductNav extends PureComponent {
  render() {
    return (
      <div className={styles.productNav_container}>
        <div
          onClick={() => this.props.onBack && this.props.onBack()}
          className={styles.productNav_leftIcon}
        >
          <img className={styles.productNav_leftIcon_img} src={icon_return} />
        </div>
        <div className={styles.productNav_middle}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {["商品", "详情", "评价"].map((value, index) => {
              return (
                <div
                  key={index + "#"}
                  className={
                    index === 0
                      ? styles.productNav_middle_titleSelected
                      : styles.productNav_middle_titleNormal
                  }
                  onClick={() => {}}
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={this.props.rightAction && this.props.rightAction()}
          className={styles.productNav_leftIcon}
        >
          <img src={icon_share} className={styles.productNav_rigthIcon_img} />
        </div>
      </div>
    );
  }
}
const TopSegment = () => {
  return (
    <Flex justify="between">
      <Flex.Item>商品</Flex.Item>
      <Flex.Item>详情</Flex.Item>
      <Flex.Item>评价</Flex.Item>
    </Flex>
  );
};

class ProductAppraise extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <ProductRowSelectItem
          dic={{ title: "商品评价（12345）", content: "", arrow: true }}
          style={{ fontSize: 32 }}
        />
        <Product_appraise />
        <WhiteSpace />
        <Product_appraise />
      </div>
    );
  }
}
class Product_appraise extends PureComponent {
  render() {
    return (
      <div className={styles.product_appraise}>
        <img
          className={styles.product_appraise_header_img}
          src={require("./image/product_appraise_header_img.png")}
        />
        <div className={styles.product_appraise_contentcontainer}>
          {/*评论的产品相关信息*/}
          <div className={styles.product_appraise_productInfo}>
            <div className={styles.product_appraise_productInfo_title}>
              {"小叶子"}
            </div>
            <div className={styles.product_appraise_productInfo_sub}>
              <div className={styles.product_appraise_productInfo_subTime}>
                {"2018-8-12"}
              </div>
              <div className={styles.product_appraise_productInfo_subCata}>
                {"分类：新茶龙井250G"}
              </div>
            </div>
          </div>

          {/*评论的内容*/}
          <div className={styles.product_appraise_content}>
            {"茶叶收到了，第三次买了，味道很清香。这次送了茶巾，继续支持"}
          </div>
          <div className={styles.product_appraise_contentImgs}>
            {[1, 2, 3, 4].map((value, index) => {
              return (
                <img
                  style={{ marginRight: (index + 1) % 4 === 0 ? 0 : 10 }}
                  className={styles.product_appraise_contentImg}
                  key={value + "#"}
                  src={require("./image/product_appraise_contentImg.png")}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
class StoreInProduct extends PureComponent {
  render() {
    return (
      <div className={styles.storeInProduct_container}>
        <div className={styles.storeInProduct_header}>
          <div className={styles.storeInProduct_header_top}>
            <div className={styles.storeInProduct_header_topleft}>
              <img
                className={styles.storeInProduct_header_topleftImg}
                src={require("./image/store_logo.png")}
              />
              <div className={styles.storeInProduct_header_topInfo}>
                <div className={styles.storeInProduct_header_topInfo_name}>
                  {"张一元旗舰店"}
                </div>
                <div className={styles.storeInProduct_header_topInfo_count}>
                  {"全部宝贝：98"}
                </div>
              </div>
            </div>

            <div className={styles.storeInProduct_header_topright}>
              <div className={styles.storeInProduct_header_toprightAll}>
                {"全部宝贝"}
              </div>
              <div
                className={styles.storeInProduct_header_toprightToStore}
                onClick={() => router.push("/storeDetails")}
              >
                {"进店逛逛"}
              </div>
            </div>
          </div>

          <div className={styles.storeInProduct_header_bottom}>
            {[
              { name: "宝贝描述：4.8", level: "高" },
              { name: "宝贝描述：4.8", level: "平" },
              { name: "宝贝描述：4.8", level: "低" }
            ].map((value, index) => {
              return (
                <div
                  key={index + "#"}
                  className={
                    styles.storeInProduct_header_bottomDetail_container
                  }
                >
                  <div className={styles.storeInProduct_header_bottomDetail}>
                    {value.name}
                  </div>
                  <div className={styles.storeInProduct_header_bottomLevel}>
                    {value.level}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <WhiteSpace />
        <div className={styles.storeInProduct_content}>
          {storeInProduct_contentimgs.map((value, index) => {
            return (
              <img
                src={value}
                key={"#" + index}
                className={styles.storeInProduct_contentImg}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
class ProductCommend extends PureComponent {
  render() {
    return (
      <div className={styles.productCommend_container}>
        <div className={styles.productCommend_title}>{"你可能喜欢"}</div>
        <div className={styles.productCommend_list_container}>
          {["", "", ""].map((value, index) => {
            return <ProductItem key={index + "#"} />;
          })}
        </div>
      </div>
    );
  }
}
class ProductTabbar extends PureComponent {


  render() {
    return (
      <div className={styles.productTabbar_container}>
        <div className={styles.productTabbar_store}>
          <img
            src={bottom_icon_mall}
            className={styles.productTabbar_store_icon}
          />
          <div className={styles.productTabbar_store_title}>{"店铺"}</div>
        </div>
        <div className={styles.productTabbar_store}>
          <img
            src={bottom_icon_service}
            className={styles.productTabbar_store_icon}
          />
          <div className={styles.productTabbar_store_title}>{"客服"}</div>
        </div>
        <div
          className={styles.productTabbar_storeCar}
          onClick={() =>
            this.props.toShoppingCart && this.props.toShoppingCart()
          }
        >
          {"加入购物车"}
        </div>
        <div
          className={styles.productTabbar_buy}
          onClick={() => this.props.toBuy && this.props.toBuy()}
        >
          {"立即购买"}
        </div>
      </div>
    );
  }
}

class ProductParameterChoose extends PureComponent {
  state = {
    modalVisible: false,
    data: {
      number: 2,
      standards: ["50g", "100g", "150g"],
      price: 150,
      productName: "2018新茶西湖牌龙井茶叶正宗雨前西湖龙井茶250g",
      productImg:
        "http://img4.imgtn.bdimg.com/it/u=2769118404,1000928488&fm=15&gp=0.jpg",
      standardChooseIndex: -1
    }
  };

  _openModal = () => {
    this.setState({
      modalVisible: true,
      data: {
        standards: ["50g", "100g", "150g"],
        price: 150,
        productName: "2018新茶西湖牌龙井茶叶正宗雨前西湖龙井茶250g",
        productImg:
          "http://img4.imgtn.bdimg.com/it/u=2769118404,1000928488&fm=15&gp=0.jpg"
      },
      number: 2,
      standardChooseIndex: -1
    });
  };

  _onModalClose = () => {
    this.setState({
      modalVisible: false
    });
  };

  _plus() {
    this.setState({
      number: this.state.number + 1
    });
    this.state.data.number += 1;
  }
  _subtract() {
    if (this.state.number < 2) return;
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <ModalBox visible={this.state.modalVisible} onClose={this._onModalClose}>
        <div className={styles.product_modal_container}>
          <div className={styles.model_content}>
            <div className={styles.model_flex_r}>
              <div className={styles.modal_p_img_wrapper}>
                <img
                  src={this.state.data.productImg}
                  alt=""
                  className={styles.modal_p_img}
                />
              </div>
              <div className={styles.modal_p_info}>
                <div className={styles.modal_price}>
                  {"¥" + this.state.data.price}
                </div>
                <div className={styles.modal_p_name}>
                  {this.state.data.productName}
                </div>
              </div>
            </div>

            <div className={styles.standard}>规格</div>

            <div className={styles.product_modal_standards}>
              {this.state.data.standards.map((value, index) => {
                return (
                  <div
                    key={"#" + index}
                    className={
                      index === this.state.standardChooseIndex
                        ? styles.product_modal_standards_itemSelected
                        : styles.product_modal_standards_item
                    }
                    onClick={() => {
                      this.setState({
                        standardChooseIndex: index
                      });
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </div>

            {/*线*/}
            <div className={styles.product_modal_standard_line} />

            <div className={styles.product_modal_standard_count}>
              <div className={styles.product_modal_standard_countTitle}>
                {"数量"}
              </div>
              <div className={styles.product_modal_standard_countChoose}>
                <div
                  className={styles.product_modal_standard_countChoose_leftBtn}
                  onClick={() => {
                    this._subtract();
                  }}
                />
                <div
                  className={styles.product_modal_standard_countChoose_number}
                >
                  {this.state.number}
                </div>
                <div
                  className={styles.product_modal_standard_countChoose_rightBtn}
                  onClick={() => this._plus()}
                />
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              this._onModalClose();
              router.push("/orderconfirm");
            }}
            className={styles.modal_footer_btn}
          >
            确定
          </div>
        </div>
      </ModalBox>
    );
  }
}
export default connect(state => {
  return {
    store: state.product
  };
})(Product);
