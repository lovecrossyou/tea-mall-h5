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
import Product_figure from "./image/Product_figure.png";
import CarouselTop from "../../components/carousel";

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
const ProductItem = ({ dic, style = {} }) => {
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
export default class Index extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log("onLeftClick")}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: "16px" }} />
            ]}
          >
            <TopSegment />
          </NavBar>
        </div>
        <div style={{ width: "100%", backgroundColor: "#fff" }}>
          <CarouselTop clsName={styles.carouselStyle}/>
        </div>

        <ProductInfo />
        <WhiteSpace />
        <ProductItem
          dic={{
            title: "产品参数：",
            content: "领取新人专享福利",
            arrow: true
          }}
        />
        <Product_Line />
        <ProductItem
          dic={{
            title: "优惠券：",
            content: "满50-100  满300-80  满200-50",
            arrow: true
          }}
        />
        <Product_Line />
        <ProductItem dic={{ title: "运费：", content: "包邮", arrow: false }} />
        <Product_Line />
        <ProductItem dic={{ title: "产品参数：", content: "", arrow: true }} />
        <WhiteSpace />

        {/*商品评价*/}
        <ProductAppraise />
        <WhiteSpace />
        {/*商品店铺*/}
        <StoreInProduct />
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
        <ProductItem
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
                style={{ width: 76, height: 76 }}
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
              <div className={styles.storeInProduct_header_toprightToStore}>
                {"进店逛逛"}
              </div>
            </div>
          </div>

          <div className={styles.storeInProduct_header_bottom} />
          {[
            { name: "宝贝描述：4.8", level: 4.8 },
            { name: "宝贝描述：4.8", level: 4.8 },
            { name: "宝贝描述：4.8", level: 4.8 }
          ].map(value => {
            return (
              <div
                key={value.name}
                className={styles.storeInProduct_header_bottomDetail_container}
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

          <div />
        </div>
      </div>
    );
  }
}
