/**
 *日期: 2019-01-14
 *作者: lovecross
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.less";
import icon_noselected from './images/shoppingcart_btn_noselected@2x.png'
import icon_selected from './images/shoppingcart_btn_selected@2x.png'
import car_icon_store from './images/car_icon_store@2x.png'
import mall_product from './images/mall_p_5@2x.png'
import { ProductOption } from "../orderconfirm";
import { Stepper } from "antd-mobile";
import { HotRecommend } from "../orderconfirm/payloadResult";

const ShoppingCartTit = function() {
  return <div className={styles.shopping_cart_tit}>
    <div className={styles.selected_button}>
      <img src={icon_noselected} alt=""/>
    </div>
    <div className={styles.shopping_cart_shop}>
      <div className={styles.shopping_cart_shop_left}>
        <img src={car_icon_store} alt=""/>
        <span>三只松鼠旗舰店</span>
      </div>
      <div className={styles.shopping_cart_shop_right}>领劵</div>
    </div>
  </div>
};

const ShoppingCartContent = function() {
  return <div className={styles.shopping_cart_content}>
    <div className={styles.selected_button}>
      <img src={icon_selected} alt=""/>
    </div>
    <div className={styles.shopping_cart_product}>
      <div className={styles.shopping_cart_product_left}>
        <img src={mall_product} alt=""/>
      </div>
      <div className={styles.shopping_cart_product_right}>
        <div className={styles.shopping_cart_product_right_tit}>茶茶茶茶茶茶茶茶茶茶茶茶茶茶茶茶茶</div>
        <div className={styles.shopping_cart_product_right_intro}>sss</div>
        <div className={styles.shopping_cart_product_right_price}>￥500</div>
        <div className={styles.shopping_cart_product_right_count}>
          <ProductOption
            right={
              <Stepper
                style={{ width: "280px", minWidth: "100px" }}
                showNumber
                max={100}
                min={1}
                defaultValue={1}
              />
            }
          />
        </div>
      </div>
    </div>
  </div>
};


const ShoppingCartItem = function() {
  return <div className={styles.shopping_cart_item}>
    <ShoppingCartTit/>
    <div className={styles.shopping_cart_content_container}>
      <ShoppingCartContent/>
      <ShoppingCartContent/>
      <ShoppingCartContent/>
    </div>
  </div>
};

const ShoppingCartGoBuy = function() {
  return <div className={styles.shopping_cart_go_buy}>
    <div className={styles.shopping_cart_go_buy_left}>
      <img src={icon_noselected} alt=""/>
      <span>全选</span>
    </div>
    <div className={styles.shopping_cart_go_buy_right}>
      <div className={styles.total_container}>
        <div className={styles.total}>合计：￥1188</div>
        <div>店铺优惠20元</div>
      </div>
      <div className={styles.close_total}>去结算(5)</div>
    </div>
  </div>
};

export default class ShoppingCart extends PureComponent{
  render() {
    return <div className={styles.shopping_cart_container}>
      <ShoppingCartItem/>
      <ShoppingCartItem/>
      <HotRecommend tit="猜你喜欢" />
      <ShoppingCartGoBuy/>
    </div>
  }
}
