/**
 *日期: 2019/1/28
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./focusList.css";
import ScrollWrap from "../../components/scroll";

import zhulizhe from "././image/zhulizhe.jpg";

const FocuslistModule = () => {
  return (
    <div className={styles.attention_list}>
      <div className={styles.attention_content_left}>
        <div className={styles.user_img}>
          <img src={zhulizhe} alt="" />
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_name}>树下的茶</div>
          <div className={styles.user_signature}>树下有茶，探寻茶香之美</div>
        </div>
      </div>
      <div className={styles.attention_btn}>关注</div>
    </div>
  );
};

export default class FocusList extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  render() {
    return (
      <div className={styles.focus_list_wrapper}>
        <div
          style={{
            height: `${this.clientHeight - 150}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="FocustList" wrapClass={styles.wrap_body}>
            <div className={styles.push_message}>为您推荐高人气博主</div>
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
            <FocuslistModule />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
