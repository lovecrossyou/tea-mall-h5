import React, { PureComponent } from "react";
import styles from "./index.less";
import { TabBar } from "antd-mobile";
import Swiper from "react-id-swiper";
import header_bg from "./image/goodtea_top_bg@2x.png";
import shoppingcart_btn from "./image/goodtea_btn_shopping@2x.png";


import router from "umi/router";
import ModalBox from "../../components/modal";
import SegmentedControl from "../../components/segmentcontrol";

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


const ProductItem = ({ onClick,addToShoppingCart }) => {
  return <div className={styles.product_item} >
    <img className={styles.product_item_icon} src="" alt=""/>
    <div className={styles.product_item_infos}>
      <div className={styles.product_item_title} onClick={onClick}>
        蜜桃乌龙茶花果茶买2送1
        白桃乌龙茶15包组
      </div>
      <div className={styles.product_item_subtitle} onClick={onClick}>
        热泡、冷泡随心泡买二送一
      </div>
      <div className={styles.product_item_price} onClick={onClick}>￥0</div>
    </div>
    <div onClick={addToShoppingCart}>
      <img className={styles.shopping_btn} src={shoppingcart_btn} alt=""/>
    </div>
  </div>;
};


const Products = ({ onClick,addToShoppingCart }) => {
  return <div>
    <ProductItem
      addToShoppingCart={addToShoppingCart}
      onClick={onClick}/>
    <ProductItem onClick={onClick}/>
    <ProductItem onClick={onClick}/>
    <ProductItem onClick={onClick}/>
    <ProductItem onClick={onClick}/>
  </div>;
};


const Timer = () => {
  return <div className={styles.timer}>
    23:15:24.12
  </div>;
};

export default class Index extends PureComponent {

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
    const params = {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      },
      containerClass: "limit_swiper_container"
    };

    return (
      <div className={styles.container}>
        <Header/>
        <SegmentedControl
          values={["今日秒杀", "明日预告"]}/>
        <Timer/>
        <Products
          addToShoppingCart={()=>{
            this.openModal();
          }}
          onClick={() => {
            router.push("/product");
          }}/>
        <ModalBox
          visible={this.state.modalVisible}
          onClose={this.onModalClose}
        >
          <div>
            <div className={styles.model_content}>
              <div className={styles.model_flex_r}>
                <div className={styles.modal_p_img_wrapper}>
                  <img src="http://img4.imgtn.bdimg.com/it/u=2769118404,1000928488&fm=15&gp=0.jpg" alt=""
                       className={styles.modal_p_img}/>
                </div>
                <div className={styles.modal_p_info}>
                  <div className={styles.modal_price}>￥123</div>
                  <div className={styles.modal_p_name}>2018新茶西湖牌龙井茶叶正宗雨前西湖龙井茶250g</div>
                </div>
              </div>
              <div className={styles.standard}>规格</div>
            </div>

            <div>xxxxxxx</div>
            <div>xxxxxxx</div>
            <div>xxxxxxx</div>
            <div>xxxxxxx</div>

            <div
              onClick={this.onModalClose}
              className={styles.modal_footer_btn}>确定
            </div>
          </div>
        </ModalBox>
      </div>
    );
  }
}


module.SegmentedControl = SegmentedControl;
