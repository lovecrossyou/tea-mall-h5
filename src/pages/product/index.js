import React, { PureComponent } from "react";
import styles from "./index.less";
import { NavBar, Icon, Button, Flex, WingBlank, Carousel } from "antd-mobile";
import Product_figure from "./image/Product_figure.png";

const ProductInfo = () => {
  return <div className={styles.product_info}>
    <div className={styles.price_info_wrapper}>
      <div className={styles.price_now}>￥125</div>
      <div className={styles.price_origin}>￥125</div>
    </div>
    <div className={styles.product_name}>2018新茶西湖牌龙井茶叶正宗雨前西湖龙井茶茶纸包春茶绿茶250g</div>
    <div></div>
  </div>;
};

export default class Index extends PureComponent {
  render() {
    return (
      <div>
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
        <div style={{ width: "100%", backgroundColor: "red" }}>
          <CarouselTop />
        </div>

        <ProductInfo />
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
class CarouselTop extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //   data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={Product_figure}
                alt="加载中。。"
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
