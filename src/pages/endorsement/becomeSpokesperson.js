import React from 'react';
import styles from './becomeSpokesperson.css'

import dianpu_bk from './image/dianpu_bk@2x.png'
import shangpin_bk from './image/shangpin_bk@2x.png'
import { WaterFailView } from "../mall/recommend";



const BecomeSpokesperson= function() {
  return <div className={styles.become_spokesperson_container}>
    <div className={styles.become_spokesperson_tit}>成为代言人</div>
    <div className={styles.become_spokesperson_content}>只要粉丝数达到10人，点赞数量100就可以成为代言人了。只要您发布视频或者笔记，在底下选择商品库的产品。只有有人通过您发布的商品点击进去，就可获得收益哦。</div>
    <div className={styles.become_spokesperson_btn}>立即申请</div>
  </div>
};

const StoreModule = function(data) {
  return <div className={styles.store_module}>
    <div className={styles.store_module_tit}>
      <img src={data.imgsrc} alt=""/>
    </div>
    <div className={styles.store_module_nav}>
      <div className={styles.store_module_nav_filter}>综合</div>
      <div className={styles.store_module_nav_money}>代言费</div>
      <div className={styles.store_module_nav_more}>更多</div>
    </div>

  </div>
};


const ProductItem = function() {
  return <div className={styles.product_item}>
    <div className={styles.product_item_img}>
      {/*<img src="" alt=""/>*/}
    </div>
    <div className={styles.product_item_sale}>销量 2586</div>
    <div className={styles.product_item_price}>代言：￥3.5</div>
  </div>
};

const StoreModuleProduct = function() {
  return <div className={styles.store_module_product}>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
  </div>
};


export default function SpokespersonContainer(){
  return (
    <div className={styles.spokesperson_container}>

      <BecomeSpokesperson/>
      <div className={styles.super_spokesperson_title}>
        <span className={styles.super_spokesperson_title_left}>为TA代言</span>
        <span className={styles.super_spokesperson_title_right}>每个人都是生活的明星</span>
      </div>
      <div>
        <StoreModule imgsrc={dianpu_bk}/>
        <StoreModuleProduct/>
        <StoreModule imgsrc={shangpin_bk}/>
        <WaterFailView/>
      </div>

    </div>

  );
}


