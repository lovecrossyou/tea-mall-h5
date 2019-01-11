import React from "react";
import styles from "./index.css";

/**
 *日期: 2019-01-11
 *作者: lovecross
 *功能:
 */

const getFistIndex = ({ }) => {
  // this.
}




export default class SegmentedControl extends React.Component {
  state = {
    activeIndex: 0
  };

  render() {
    const { values } = this.props;
    const activeIndex = this.state.activeIndex;
    const firstIndex = 0;
    const lastIndex = values.length - 1;



    return (
      <div className={styles.segmentcontrol}>
        {values.map((title, index) => {
          if (index === firstIndex)
            return (
              <div
                onClick={() => this.setState({ activeIndex: index })}
                key={index + "#"}
                className={
                  activeIndex === index
                    ? styles.segmentcontrol_left_active
                    : styles.segmentcontrol_left
                }
              >
                {title}
              </div>
            );
          if (index === lastIndex)
            return (
              <div
                onClick={() => this.setState({ activeIndex: index })}
                key={index + "#"}
                key={index + "#"}
                className={
                  activeIndex === index
                    ? styles.segmentcontrol_right_active
                    : styles.segmentcontrol_right
                }
              >
                {title}
              </div>
            );
          return (
            <div
              onClick={() => this.setState({ activeIndex: index })}
              key={index + "#"}
              key={index + "#"}
              className={
                activeIndex === index
                  ? styles.segmentcontrol_item_active
                  : styles.segmentcontrol_item
              }
            >
              {title}
            </div>
          );
        })}
      </div>
    );
  }
}
