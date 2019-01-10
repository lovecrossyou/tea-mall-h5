import { PureComponent } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import Product_figure from "../pages/product/image/Product_figure.png";
import React from "react";

export default class CarouselTop extends PureComponent {
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
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
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
          {this.state.data.map(val => (
            <a
              key={val + ""}
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
                alt="加载中..."
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
