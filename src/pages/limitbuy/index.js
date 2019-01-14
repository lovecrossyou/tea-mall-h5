import React, { PureComponent } from "react";
import styles from "./index.css";
import { TabBar } from "antd-mobile";
import Swiper from "react-id-swiper";
import header_bg from "./image/goodtea_top_bg@2x.png";
import shoppingcart_btn from "./image/goodtea_btn_shopping@2x.png";
import ScrollWrap from "../../components/scroll";

import router from "umi/router";
import ModalBox from "../../components/modal";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_title}>好茶试饮</div>
      <div className={styles.header_subtitle}>
        新用户福利 人气种草好茶免费送
      </div>
    </div>
  );
};

const ProductItem = ({ onClick, addToShoppingCart }) => {
  return (
    <div className={styles.product_item}>
      <img className={styles.product_item_icon} src="" alt=""/>
      <div className={styles.product_item_infos}>
        <div className={styles.product_item_title} onClick={onClick}>
          蜜桃乌龙茶花果茶买2送1 白桃乌龙茶15包组
        </div>
        <div className={styles.product_item_subtitle} onClick={onClick}>
          热泡、冷泡随心泡买二送一
        </div>
        <div className={styles.product_item_price} onClick={onClick}>
          ￥0
        </div>
      </div>
      <div onClick={addToShoppingCart}>
        <img className={styles.shopping_btn} src={shoppingcart_btn} alt=""/>
      </div>
    </div>
  );
};

const Products = ({ onClick, addToShoppingCart }) => {
  return (
    <div>
      <ProductItem addToShoppingCart={addToShoppingCart} onClick={onClick}/>
      <ProductItem onClick={onClick}/>
      <ProductItem onClick={onClick}/>
      <ProductItem onClick={onClick}/>
      <ProductItem onClick={onClick}/>
    </div>
  );
};

class SegmentedControl extends React.Component {
  state = {
    activeIndex: 0
  };

  render() {
    const { values } = this.props;
    const activeIndex = this.state.activeIndex;
    const firstIndex = 0;
    const lastIndex = values.length - 1;
    return (
      <div className={styles.segmentcontrol}>
        {values.map((title, index) => {
          if (index === firstIndex)
            return (
              <div
                onClick={() => this.setState({ activeIndex: index })}
                key={index + "#"}
                className={
                  activeIndex === index
                    ? styles.segmentcontrol_left_active
                    : styles.segmentcontrol_left
                }
              >
                {title}
              </div>
            );
          if (index === lastIndex)
            return (
              <div
                onClick={() => this.setState({ activeIndex: index })}
                key={index + "#"}
                key={index + "#"}
                className={
                  activeIndex === index
                    ? styles.segmentcontrol_right_active
                    : styles.segmentcontrol_right
                }
              >
                {title}
              </div>
            );
          else {
            return (
              <div
                onClick={() => this.setState({ activeIndex: index })}
                key={index + "#"}
                key={index + "#"}
                className={
                  activeIndex === index
                    ? styles.segmentcontrol_item_active
                    : styles.segmentcontrol_item
                }
              >
                {title}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const Timer = () => {
  return <div className={styles.timer}>23:15:24.12</div>;
};

export default class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  state = {
    modalVisible: false
  };

  openModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  onModalClose = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div
          style={{
            height: `${this.clientHeight}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="lefttList" wrapClass={styles.wrap_body}>
            <Header/>
            <SegmentedControl values={["今日秒杀", "明日预告"]}/>
            <Timer/>
            <Products
              addToShoppingCart={() => {
                this.openModal();
              }}
              onClick={() => {
                router.push("/product");
              }}
            />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

module.SegmentedControl = SegmentedControl;
