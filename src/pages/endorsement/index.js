/**
 *Created by tianhaojie .
 *Created on 2019-01-18 .
 *desc
 */
import React, { PureComponent } from "react";
import styles from "./index.css";
import ScrollWrap from "../../components/scroll";
import router from "umi/router";
import { connect } from "dva";
import nav_left_arrow from "../../layouts/images/order_top_icon_return@2x.png";
import btn_right_shop from "./image/btn_right_shop@2x.png";
import icon_btn_comments from "./image/btn_comments@2x.png";
import icon_btn_givealike from "./image/btn_givealike@2x.png";
import endorsement from "../../../mock/endorsement";
import { WhiteSpace, ListView } from "antd-mobile";
class Endorsement extends PureComponent {
  componentWillMount() {
    this.props.dispatch({
      type: "endorsement/getEndorsementDetail",
      payload: {}
    });
  }

  render() {
    console.log(
      "endorsementdetail==========" + JSON.stringify(this.props.store.detail)
    );
    const { detail } = this.props.store;
    return (
      <div>
        <Navigator />
        <div className={styles.endorsement_container}>
          <ScrollWrap
            wrapId={"endorsement_scroll"}
            wrapClass={styles.endorsement_scroll}
            bounce_top={false}
          >
            <img
              src={detail.endorsement_user_Info.homePic || ""}
              className={styles.topImage}
            />
            <img
              src={detail.endorsement_user_Info.homePic || ""}
              className={styles.topImage}
            />
            {/*发布的信息*/}
            <PublishInfo data={detail.endorsement_user_Info} />

            {/*访客*/}
            <WhiteSpace />
            <VistorView data={detail.visitor || {}} />
            {/*店铺*/}
            <WhiteSpace />
            <EndorsementShopView data={detail.storeInfo || {}} />

            {/*推荐*/}
            <WhiteSpace />
            <EndorsementCommend list={detail.recommend || []} />
          </ScrollWrap>
        </div>
        <BottomView />
      </div>
    );
  }
}
class PublishInfo extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className={styles.publishinfo_header}>
          <div>
            <img
              className={styles.publishinfo_icon}
              src={data.userIcon || ""}
            />
            <div className={styles.publishinfo_name}>{data.name}</div>
            <div className={styles.publishinfo_level}>{"LV" + data.level}</div>
          </div>
          <div className={styles.publishinfo_attention}>关注</div>
        </div>
        <div className={styles.publishinfo_content}>{data.content}</div>
        <div className={styles.publishinfo_bottom}>
          <div className={styles.publishinfo_bottom_time}>{data.time}</div>
          <div className={styles.publishinfo_bottom_praisecount}>
            {"点赞" + data.praiseCount + "次"}
          </div>
        </div>
      </div>
    );
  }
}
const VistorView = ({ data }) => {
  const { list } = data;
  let listArr = list || [];
  return (
    <div className={styles.vistor}>
      <div className={styles.vistor_count}>{"访客" + data.number}</div>
      <div className={styles.vistor_imgs_c}>
        {listArr.map((value, index) => {
          return (
            <img
              className={styles.vistor_img}
              key={index + "#"}
              src={value.url}
            />
          );
        })}
      </div>
    </div>
  );
};
const EndorsementShopView = ({ data }) => {
  const { logo, name, views } = data;
  return (
    <div className={styles.shopInfo_c}>
      <div className={styles.shopInfo_left}>
        <img className={styles.shopInfo_img} src={logo} />
        <div className={styles.shopInfo_name_c}>
          <div className={styles.shopInfo_name}>{name}</div>
          <div className={styles.shopInfo_views}>{views}</div>
        </div>
      </div>
      <div>
        <div className={styles.shopInfo_goto_name}>进店逛逛</div>
        <img className={styles.shopInfo_goto_arrow} src={btn_right_shop} />
      </div>
    </div>
  );
};

class EndorsementCommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div className={styles.endorsement_commend}>
        <div className={styles.endorsement_commend_title_c}>
          <div className={styles.endorsement_commend_line} />
          <div className={styles.endorsement_commend_title}>你可能喜欢</div>
        </div>

        <ScrollWrap
          wrapClass={styles.endorsement_commend_scroll}
          wrapId={"endorsementCommend"}
        >
          <div className={styles.endorsement_commend_content}>
            {list.map((value, index) => {
              return (
                <div
                  key={index + "#"}
                  className={styles.endorsement_commend_content_item}
                >
                  <EndorsementCommendItem image={value.productImg} />
                </div>
              );
            })}
          </div>
        </ScrollWrap>
      </div>
    );
  }
}

const EndorsementCommendItem = ({ image }) => {
  return (
    <div
      className={styles.endorsement_commend_item}
      onClick={() => router.push("/product")}
    >
      <div className={styles.home_top_selling_tea_item_img}>
        <img
          src={image}
          alt=""
          className={styles.endorsement_commend_item_img}
        />
      </div>

      <div className={styles.home_top_selling_tea_item_intro}>
        <div className={styles.home_top_selling_tea_item_intro_content}>
          自桃树乌龙茶15包组合自桃树乌龙茶15包组合
        </div>
        <div className={styles.home_top_selling_tea_item_intro_price}>
          ￥58.3
        </div>
      </div>
    </div>
  );
};

const Navigator = () => {
  return (
    <div className={styles.endorsement_nav}>
      <img
        onClick={() => {
          router.go(-1);
        }}
        src={nav_left_arrow}
        className={styles.endorsement_nav_arrow}
      />
      <div className={styles.endorsement_nav_title}>{"代言商品"}</div>
      <div className={styles.endorsement_nav_right} />
    </div>
  );
};
const BottomView = () => {
  return (
    <div className={styles.endorsement_bottom_c}>
      <div className={styles.endorsement_bottom_left}>
        <div className={styles.endorsement_bottom_left_c}>
          <div className={styles.endorsement_bottom_title}>评论</div>
          <img
            className={styles.endorsement_bottom_icon}
            src={icon_btn_comments}
          />
          <div className={styles.endorsement_bottom_count}>154</div>
        </div>
      </div>

      <div className={styles.endorsement_bottom_line} />

      <div className={styles.endorsement_bottom_left}>
        <div className={styles.endorsement_bottom_left_c}>
          <div className={styles.endorsement_bottom_title}>点赞</div>
          <img
            className={styles.endorsement_bottom_icon}
            src={icon_btn_comments}
          />
          <div className={styles.endorsement_bottom_count}>154</div>
        </div>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    store: state.endorsement
  };
})(Endorsement);
