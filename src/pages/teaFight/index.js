/**
 *日期: 2019/1/17
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.css";
import Toocomponent from "./components";

import ScrollWrap from "../../components/scroll";
import questionIcon from "./images/Teafight_icon_question mark@2x.png";
import add from "./images/Teafight_icon_add@2x.png";
import tou_one from "./images/tou1.jpg";
import tou_two from "./images/tou2.jpg";
import tou_three from "./images/tou3.jpg";
import teaFight from "./images/Teafight_img@2x.png";
import heart from "./images/Teafight_icon_ heart@2x.png";
import share from "./images/Teafight_icon_share@2x.png";
import comment from "./images/Teafight_icon_comment@2x.png";
import point from "./images/doucha_about_point@2x.png";

import { closest, Modal } from "antd-mobile";
import CarouselTop from "../../components/carousel";

// 点赞排行榜
const Rankinglist = ({ showTips }) => {
  return (
    <div className={styles.ranking_wrapper}>
      <div className={styles.ranking_title}>
        <div className={styles.ranking_date_info}>
          <div className={styles.ranking_week}>一周排行榜</div>
          <div className={styles.ranking_date}>2019.1.1-2019.1.7</div>
        </div>
        <div className={styles.question_img} onClick={showTips}>
          <img src={questionIcon} alt="" />
        </div>
      </div>

      <div className={styles.raking_reveal}>
        <div className={styles.user_head_area}>
          <div className={styles.top_user_img_area}>
            <div className={styles.user_head_img}>
              <img src={tou_one} alt="" />
            </div>
            <div className={styles.attention_icon}>
              <img src={add} alt="" />
            </div>
          </div>
          <div className={styles.user_name}>朱理哲大老婆</div>
        </div>
        <div className={styles.user_head_area}>
          <div className={styles.top_user_img_area}>
            <div className={styles.user_head_img}>
              <img src={tou_two} alt="" />
            </div>
            <div className={styles.attention_icon}>
              <img src={add} alt="" />
            </div>
          </div>
          <div className={styles.user_name}>朱理哲二老婆</div>
        </div>
        <div className={styles.user_head_area}>
          <div className={styles.top_user_img_area}>
            <div className={styles.user_head_img}>
              <img src={tou_three} alt="" />
            </div>
            <div className={styles.attention_icon}>
              <img src={add} alt="" />
            </div>
          </div>
          <div className={styles.user_name}>朱理哲小老婆</div>
        </div>
      </div>
      <div className={styles.likes_num_ranking}>
        <div className={styles.likes_num}>15245</div>
        <div className={styles.likes_num}>18245</div>
        <div className={styles.likes_num}>1045</div>
      </div>
    </div>
  );
};
// 文章排行
const ArticleRanking = () => {
  return (
    <div className={styles.article_ranking_wrapper}>
      <div className={styles.top_person_info}>
        <div className={styles.person_info_left}>
          <div className={styles.person_info_img}>
            <img src={tou_three} alt="" />
          </div>
          <div className={styles.person_info_name}>在路上</div>
        </div>
        <div className={styles.person_info_right}>
          <div className={styles.person_info_rank}>第一名</div>
          <div className={styles.week_notice}>第三周实力榜</div>
        </div>
      </div>
      {/*轮播图*/}
      <div className={styles.user_publish}>
        <CarouselTop
          clssName={styles.carousel_container}
          imgs={[teaFight, teaFight]}
        />
      </div>

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

const TipsModal = ({ visible = false, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      closable
      maskClosable={true}
      onClose={() => onClose()}
      title="关于排行榜"
    >
      <div style={{ overflow: "scroll" }}>
        <div className={styles.rule_content}>
          博主发布的关于茶艺的动态或者视频，按照点 赞数量进行排名。
        </div>
        <div className={styles.rule_tips}>
          TIPS:排行榜为周排名，每周一零点更新数据
        </div>
        <div className={styles.bottom_point}>
          <img src={point} alt="" />
        </div>
      </div>
    </Modal>
  );
};

export default class TeaFight extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  state = {
    showTips: false
  };

  showTips = () => {
    this.setState({
      showTips: true
    });
  };

  hideTips = () => {
    this.setState({
      showTips: false
    });
  };

  render() {
    return (
      <div className={styles.represent_wrapper}>
        <div
          style={{
            height: `${this.clientHeight - 174 -130 - 150}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="TeaFightList" wrapClass={styles.wrap_body}>
            <Rankinglist showTips={this.showTips.bind(this)} />
            <ArticleRanking />
            <ArticleRanking />
          </ScrollWrap>
          <TipsModal
            onClose={this.hideTips.bind(this)}
            visible={this.state.showTips}
          />
        </div>
      </div>
    );
  }
}
