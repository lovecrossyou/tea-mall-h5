import React, { Component } from "react";
// import StarRatingComponent from "react-star-rating-component";
import styles from "./appraise.less";
import { Navigator } from "../../components/navigator";
import Scroll from "../../components/scroll/scroll";
import StarRate from "../../components/starRate/starRate";
import { TextareaItem, ImagePicker } from "antd-mobile";
import star_store_img from "./image/star_store.png";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}

export default class Appraise extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const scrollProps = {
      className: styles.appraise_scroll,
      dataSource: ["1", "2"]
    };
    return (
      <div>
        <Navigator title={"发表评价"} />
        <div className={styles.appraise_container}>
          <Scroll {...scrollProps} ref={c => (this.scroll = c)}>
            <div className={styles.star_rate_c}>
              <img
                className={styles.star_peoduct_img}
                src={
                  "http://img1.360buyimg.com/n6/jfs/t25855/64/1810069871/290526/f21ee852/5bbc71fdNf1102420.jpg"
                }
              />
              <div className={styles.star_title}>描述相符</div>
              <StarRate />
              <div className={styles.star_value}>好</div>
            </div>
            <TextareaItem
              clear={true}
              autoFocus={true}
              placeholder="宝贝还满意吗？说一下使用心得吧"
              rows={2}
              moneykeyboardwrapprops={moneyKeyboardWrapProps}
            />
            <UploadImage />
            <div className={styles.space_line} />
            <div className={styles.space_line2} />
            <div>
              <div className={styles.store_star_title_c}>
                <img
                  className={styles.store_star_title_img}
                  src={star_store_img}
                />
                <div className={styles.store_star_title}>店铺评分</div>
              </div>
              <div className={styles.star_store_rate_c}>
                <div className={styles.star_store_title}>物流服务</div>
                <StarRate />
              </div>
              <div className={styles.star_store_rate_c}>
                <div className={styles.star_store_title}>服务态度</div>
                <StarRate />
              </div>
            </div>
          </Scroll>
        </div>
      </div>
    );
  }
}
const data = [];
class UploadImage extends Component {
  state = {
    files: data,
    multiple: false
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };
  render() {
    const { files } = this.state;
    return (
      <div className={styles.uploadImage}>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs[index].url)}
          selectable={files.length < 9}
          multiple={this.state.multiple}
        />
      </div>
    );
  }
}
class RadioChoose extends Component {
  redder() {
    return <div />;
  }
}
