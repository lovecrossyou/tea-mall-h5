import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import { Carousel, SegmentedControl, WingBlank } from 'antd-mobile';
import styles from './index.css';
import NavBarList from './navBarList';

import mall_classification from './image/mall_icon_classification@2x.png';
import mall_icon_search from './image/mall_icon_search@2x.png';
import mall_main_img_1 from './image/mall_main_img_1@2x.png';
import mall_main_img_2 from './image/mall_main_img_2@2x.png';
import mall_main_img_3 from './image/mall_main_img_3@2x.png';
import mall_p_hot from './image/mall_p_hot@2x.png';
import mall_p_1 from './image/mall_p_1@2x.png';
import mall_p_5 from './image/mall_p_5@2x.png';
import CarouselTop from "../../layouts/carousel";
import router from 'umi/router';


class Index extends PureComponent{
  render() {
    console.log(this.props.store);
    const {carousel , imgHeight} = this.props.store;
    return (
      <div className={styles.home_container}>
        <div className={styles.home_header}>
            <div className={styles.home_header_left}>
              <img src={mall_classification} alt=""/>
              <div>分类</div>
            </div>
            <div className={styles.home_header_right}>
              <div className={styles.home_header_right_input}>
                <img src={mall_icon_search} alt=""/>
                <span>大家正在搜：喝茶时间表</span>
              </div>
            </div>
        </div>
        <NavBarList/>
        <div className={styles.carousel_container}>
          <CarouselTop clsName={styles.carousel_container}/>
        </div>
        <div className={styles.home_section}>
          <div className={styles.home_free_tea}>
            <div className={styles.home_free_tea_left}>
              <div className={styles.home_free_tea_intro}>
                <div className={styles.home_free_tea_intro_h}>好茶试饮</div>
                <div>人气好茶免费送</div>
              </div>
              <div className={styles.home_free_tea_img}>
                <img src={mall_main_img_1} alt=""/>
              </div>
            </div>
            <div className={styles.home_free_tea_right}>
              <div className={styles.home_free_tea_right_item}>
                <div className={styles.home_free_tea_intro}>
                  <div className={styles.home_free_tea_intro_h}>名品优店</div>
                  <div>回头客</div>
                  <div>私藏好店</div>
                </div>
                <div className={styles.home_free_tea_img}>
                  <img src={mall_main_img_2} alt=""/>
                </div>
              </div>
              <div className={styles.home_free_tea_right_item} style={{marginTop:"12px"}}>
                <div className={styles.home_free_tea_intro}>
                  <div className={styles.home_free_tea_intro_h}>名品优店</div>
                  <div>回头客</div>
                  <div>私藏好店</div>
                </div>
                <div className={styles.home_free_tea_img}>
                  <img src={mall_main_img_3} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.home_top_selling_tit}>爆款工夫茶</div>
          <div className={styles.home_top_selling_tea}>
            <div className={styles.home_top_selling_tea_item}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_hot} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
            <div className={styles.home_top_selling_tea_item}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_hot} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
          </div>
          <div className={styles.home_top_selling_tit}>
            <div>限时秒杀</div>
            <div className={styles.home_top_selling_tit_right}>
              <span>23</span>:
              <span>23</span>:
              <span>11.11</span>
            </div>
          </div>
          <div className={styles.time_limit_selling}>
            <div className={styles.home_top_selling_tea_item} onClick={()=>router.push('/limitbuy')}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_1} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
            <div className={styles.home_top_selling_tea_item}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_1} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
            <div className={styles.home_top_selling_tea_item}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_1} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
            <div className={styles.home_top_selling_tea_item}>
              <div className={styles.home_top_selling_tea_item_img}>
                <img src={mall_p_1} alt=""/>
              </div>
              <div className={styles.home_top_selling_tea_item_intro}>
                <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
                <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.home_footer}>
          <div className={styles.home_top_selling_tea_item}>
            <div className={styles.home_top_selling_tea_item_img}>
              <img src={mall_p_5} alt=""/>
            </div>
            <div className={styles.home_top_selling_tea_item_intro}>
              <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
              <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
            </div>
          </div>
          <div className={styles.home_top_selling_tea_item}>
            <div className={styles.home_top_selling_tea_item_img}>
              <img src={mall_p_5} alt=""/>
            </div>
            <div className={styles.home_top_selling_tea_item_intro}>
              <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
              <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
            </div>
          </div>
          <div className={styles.home_top_selling_tea_item}>
            <div className={styles.home_top_selling_tea_item_img}>
              <img src={mall_p_5} alt=""/>
            </div>
            <div className={styles.home_top_selling_tea_item_intro}>
              <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
              <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state=>{
  return {
    store:state.classify
  }
})(Index)
