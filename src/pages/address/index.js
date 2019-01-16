import React from "react";
import { connect } from "dva";
import { Button } from "antd-mobile";
import styles from "./page.css";
import { AddressCell } from "./components/addresscell";
import router from "umi/router";
import { Navigator } from "../../components/navigator";
import ScrollWrap from "../../components/scroll";

const CreateNewAddress = ({ onClick }) => {
  return (
    <div className={styles["add-addr-container"]}>
      <div className={styles["btn-new"]} type="warning" onClick={onClick}>
        + 添加新地址
      </div>
    </div>
  );
};

class AddressList extends React.Component {

  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  // 编辑
  addresseEdit = address => {
    this.props.dispatch({
      type: "address/setActive",
      payload: address
    });
    router.push("address/AddressEdit");
  };

  // 删除
  addressDel = addr => {
    this.props.dispatch({
      type: "address/delete",
      payload: {
        addressId: addr.id
      },
      cb: () => {
        this.props.dispatch({
          type: "address/fetch"
        });
      }
    });
  };

  // 新建
  createNew = () => {
    this.props.dispatch({
      type: "address/saveActive",
      payload: null
    });
    router.push("address/addressedit");
  };

  render() {
    const store = this.props.store;
    return (
      <div>
        <div
          style={{
            height: `${this.clientHeight - 120 - 102}px`,
            position: "relative"
          }}>
          <Navigator title='地址列表'/>
          <ScrollWrap wrapId="addressList" wrapClass={styles.wrap_body}>
            <div>
              {store.list.map((address, index) => {
                return (
                  <AddressCell
                    edit={this.addresseEdit}
                    del={this.addressDel}
                    address={address}
                    key={"#" + index}
                  />
                );
              })}
            </div>
          </ScrollWrap>
        </div>
        <CreateNewAddress onClick={this.createNew}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    store: state.address
  };
})(AddressList);

//
