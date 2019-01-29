/**
 *日期: 2019-01-21
 *作者: lovecross
 *功能:
 */
import React, { PureComponent } from "react";
import styles from "./focus.css";
import ScrollWrap from "../../components/scroll";

import weather from "./image/focuson_icon_weather@2x.png";
import zhulizhe from "./image/zhulizhe.jpg";
import CarouselTop from "../../components/carousel";
import teaFight from "../teaFight/images/Teafight_img@2x.png";
import Toocomponent from "../teaFight/components";
import heart from "../teaFight/images/Teafight_icon_ heart@2x.png";
import share from "../teaFight/images/Teafight_icon_share@2x.png";
import comment from "../teaFight/images/Teafight_icon_comment@2x.png";
import tou_three from "./image/tou3.jpg";

const FocusPerson = () => {
  return (
    <div className={styles.attention_person_wrapper}>
      {/*头部*/}
      <div className={styles.attention_header}>
        <div className={styles.attention_header_left}>
          <div className={styles.user_img}>
            <img src={zhulizhe} alt="" />
          </div>
          <div className={styles.user_name}>大眼睛</div>
        </div>
        <div className={styles.attention_header_right}>
          <div className={styles.state_info}>
            <div className={styles.weather_img}>
              <img src={weather} alt="" />
            </div>
            <div className={styles.weather_option}>雨</div>
            <div className={styles.weather_limit}>10℃</div>
          </div>
          <div className={styles.state_info}>
            <div className={styles.weather_option}>心情：</div>
            <div className={styles.weather_limit}>38℃</div>
          </div>
        </div>
      </div>

      {/*轮播图*/}
      <div className={styles.user_publish}>
        <CarouselTop
          clssName={styles.carousel_container}
          imgs={[teaFight, teaFight]}
        />
      </div>

      {/*文字展开隐藏*/}
      <div className={styles.issue_content}>
        <Toocomponent />
      </div>

      {/*点赞 & 转发 & 评论*/}
      <div className={styles.operation_list}>
        <div className={styles.bottom_operation}>
          <div className={styles.operation_icon}>
            <img src={heart} alt="" />
          </div>
          <div className={styles.operation_num}>1.5W</div>
        </div>
        <div className={styles.bottom_operation}>
          <div className={styles.operation_icon}>
            <img src={share} alt="" />
          </div>
          <div className={styles.operation_num}>1.5W</div>
        </div>
        <div className={styles.bottom_operation}>
          <div className={styles.operation_icon}>
            <img src={comment} alt="" />
          </div>
          <div className={styles.operation_num}>1.5W</div>
        </div>
      </div>
    </div>
  );
};
// 可能喜欢的博主
const BloggerPush = () => {
  return (
    <div className={styles.blogger_push_wrapper}>
      <div className={styles.blogger_push_list}>
        <div className={styles.blogger_push_info}>
          <div className={styles.blogger_header_img}>
            <img src={tou_three} alt="" />
          </div>
          <div className={styles.blogger_name}>仙女蓉</div>
          <div className={styles.fans_num}>
            <div>粉丝：</div>
            <div>3.5W</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Focus extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }
  render() {
    return (
      <div className={styles.focus_wrapper}>
        <div
          style={{
            height: `${this.clientHeight - 150 - 174}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="Focust" wrapClass={styles.wrap_body}>
            <FocusPerson />
            <div className={styles.blogger_push_wrapper}>
              <div className={styles.header_title}>你或许喜欢TA们</div>
              <div className={styles.all_blogger_push_wrapper}>
                <BloggerPush />
                <BloggerPush />
                <BloggerPush />
              </div>
            </div>
            <FocusPerson />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
