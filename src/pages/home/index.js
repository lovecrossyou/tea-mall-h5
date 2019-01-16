import React, { PureComponent } from "react";
import { connect } from "dva";
import styles from "./index.css";


import mall_classification from "./image/mall_icon_classification@2x.png";
import mall_icon_search from "./image/mall_icon_search@2x.png";
import mall_main_img_1 from "./image/mall_main_img_1@2x.png";
import mall_main_img_2 from "./image/mall_main_img_2@2x.png";
import mall_main_img_3 from "./image/mall_main_img_3@2x.png";
import mall_p_hot from "./image/mall_p_hot@2x.png";
import mall_p_1 from "./image/mall_p_1@2x.png";
import mall_p_5 from "./image/mall_p_5@2x.png";
import mall_img from "./image/mall_img@2x.png";
import mall_img_2 from "./image/mall_img_2@2x.png";
import mall_img_3 from "./image/mall_img_3@2x.png";
import mall_banner from "./image/mall_banner@2x.png";

import CarouselTop from "../../components/carousel";
import router from "umi/router";
import ScrollWrap from "../../components/scroll";
import NavBarList from "../../components/navbarlist";

const Header = function() {
  return <div className={styles.home_header}>
    <div className={styles.home_header_left} onClick={()=>router.push('/category')}>
      <img src={mall_classification} alt=""/>
      <div>分类</div>
    </div>
    <div className={styles.home_header_right}>
      <div className={styles.home_header_right_input}>
        <img src={mall_icon_search} alt=""/>
        <span>大家正在搜：喝茶时间表</span>
      </div>
    </div>
  </div>;
};
// 好茶试饮
const HomeFreeTea = function() {
  return <div className={styles.home_free_tea}>
    <div className={styles.home_free_tea_left}>
      <div className={styles.home_free_tea_intro} onClick={()=>router.push('/limitbuy')}>
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
      <div className={styles.home_free_tea_right_item}>
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
  </div>;
};

export const ProductItem = ({image}) => {
  console.log(111,image)
  return <div className={styles.home_top_selling_tea_item}  onClick={()=>router.push('/product')}>
    <div className={styles.home_top_selling_tea_item_img}>
      <img src={image} alt=""/>
    </div>
    <div className={styles.home_top_selling_tea_item_intro}>
      <div className={styles.home_top_selling_tea_item_intro_content}>自桃树乌龙茶15包组合自桃树乌龙茶15包组合</div>
      <div className={styles.home_top_selling_tea_item_intro_price}>￥58.3</div>
    </div>
  </div>;
};

// 爆款茶
const HomeSellingTea = function() {
  return <div className={styles.home_top_selling_tea}>
    <ProductItem image={mall_img} />
    <ProductItem image={mall_img} />
  </div>;
};
// 限时秒杀
const TimeLimitSelling = function() {
  return <div className={styles.time_limit_selling}>
    <ProductItem image={mall_img_2} onClick={() => router.push("/limitbuy")}/>
    <ProductItem image={mall_img_2}/>
    <ProductItem image={mall_img_2}/>
    <ProductItem image={mall_img_2}/>
  </div>;
};

const Section = function() {
  return <div className={styles.home_section}>
    <HomeFreeTea/>
    <div className={styles.home_top_selling_tit}>爆款工夫茶</div>
    <HomeSellingTea/>
    <div className={styles.home_top_selling_tit}   onClick={()=>router.push('/limitbuy')}>
      <div>限时秒杀</div>
      <div className={styles.home_top_selling_tit_right}>
        <span>23</span>:
        <span>23</span>:
        <span>11.11</span>
      </div>
    </div>
    <TimeLimitSelling/>
  </div>;
};

export const HotRecommendShow = function() {
  return <div className={styles.home_footer}>
    <ProductItem image={mall_img_3}/>
    <ProductItem image={mall_img_3}/>
    <ProductItem image={mall_img_3}/>
  </div>;
};

const listArr = ['精选','绿茶','红茶','黄茶','白茶','青茶','黑茶']


class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }


  render() {
    console.log(this.props.store);
    const { carousel, imgHeight } = this.props.store;
    return (
      <div className={styles.home_container}>
        <Header/>
        <NavBarList data={listArr}/>
        <div
          style={{
            height: `${this.clientHeight - 135 - 132 - 150}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="lefttList" wrapClass={styles.wrap_body}>
            <div className={styles.carousel_container} >
              <CarouselTop clsName={styles.carousel_container} imgs={[mall_banner,mall_banner]} />
            </div>
            <Section/>
            <HotRecommendShow/>
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.classify
  };
})(Index);
