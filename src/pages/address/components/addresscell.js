import React from "react";
import { SwipeAction, List, Icon } from "antd-mobile";
import styles from "./address.css";
import chooseIcon from "./images/choose@2x.png";
import editIcon from "./images/adress_btn_edit@2x.png";
import delIcon from "./images/adress_btn_delete@2x.png";

export const AddressCell = ({ address, del, edit }) => {
  console.log("address ", address);
  return (
    <div style={{ margin: "10px 0", backgroundColor: "#fff" }}>
      <List>
        <SwipeAction
          style={{ backgroundColor: "#f5f5f5" }}
          autoClose
          right={[
            {
              text: "删除",
              onPress: () => {
                del(address);
              },
              style: { backgroundColor: "#ddd", color: "white", width: "280px" }
            },
            {
              text: "编辑",
              onPress: () => {
                edit(address);
              },
              style: {
                backgroundColor: "#F4333C",
                color: "white",
                width: "280px"
              }
            }
          ]}
          onOpen={() => console.log("global open")}
          onClose={() => console.log("global close")}
        >
          <List.Item onClick={e => console.log(e)}>
            <div className="addr_btn" data={address.id}>
              <div className={styles.right}>
                <div className={styles.linkman}>
                  <div className={styles.reciev_name}>{address.recievName}</div>
                  <div className={styles.phone}>{address.phoneNum}</div>
                </div>
                <div className={styles.shipping_address}>
                  <div>{address.fullAddress}</div>
                </div>
                <div className={styles.address_operate}>
                </div>
              </div>
            </div>
          </List.Item>
        </SwipeAction>
      </List>
    </div>
  );
};
