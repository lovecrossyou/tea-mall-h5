/**
 *日期: 2019/1/15
 *作者: xiannvrong
 *功能:
 */

import React, { PureComponent } from "react";
import styles from "./index.css";
import ScrollWrap from "../../components/scroll";
import { SettingsItem } from "../settings/components";
import router from "umi/router";

export default class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  render() {
    return (
      <div className={styles.settings_wrapper}>
        <div
          style={{
            height: `${this.clientHeight}px`,
            position: "relative"
          }}
        >
          <ScrollWrap wrapId="settingsList" wrapClass={styles.wrap_body}>
            <SettingsItem
              title="地址管理"
              onClick={() => {
                router.push("/address");
              }}
            />
            <SettingsItem title="绑定手机号" />
            <SettingsItem title="隐私设置" />
            <SettingsItem title="清除缓存" />
            <SettingsItem title="退出登录" />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}
