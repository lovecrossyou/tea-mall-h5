/**
 * 封装antd Carousel 轮播图组件
 */
import { PureComponent } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import Product_figure from "../pages/product/image/Product_figure.png";
import React from "react";

export default class CarouselTop extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let imgs = this.props.imgs || [];
    return (
      <Carousel
        autoplay={true}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        dotStyle={{
          width: "28px",
          height: "4px",
          borderRadius: "2px",
          backgroundColor: "#D3D3D3"
        }}
        dotActiveStyle={{
          width: "28px",
          height: "4px",
          borderRadius: "2px",
          backgroundColor: "#101010"
        }}
        afterChange={index => console.log("slide to", index)}
      >
        {imgs.map(val => (
          <div key={val + ""} className={this.props.clsName}>
            <img
              src={val}
              alt="加载中..."
              style={{ height: "100%", width: "100%", verticalAlign: "top" }}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}
