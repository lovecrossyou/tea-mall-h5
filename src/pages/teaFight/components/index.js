/**
 *日期: 2019/1/21
 *作者: xiannvrong
 *功能:
 */
import React from "react";

let a = true;
let len = 30;
class Toocomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needindex: false,
      newText: "",
      text:
        "空气中的茶香，古香古色的气息，带你穿越扬州三月,气中的茶香香香香香香香香,空气中的茶香，古香古色的气息，带你穿越扬州三月,气中的茶香香香香香香香香"
    };
    //初始化
    this.state.newText = this.state.text;
    a
      ? (this.state.text = this.state.text.substring(0, len))
      : (this.state.text = this.state.newText);
  }
  activateLasers() {
    a = a ? false : true;
    //如果a==true 让字数变成60length
    if (a) {
      this.setState({ text: this.state.text.substring(0, len) });
    } else {
      this.setState({ text: this.state.newText });
    }
  }
  render() {
    return (
      <div>
        <p>
          <span>
            {this.state.text}
            {a ? "......" : ""}
          </span>
          <a onClick={this.activateLasers.bind(this)} ref="btn">
            {a ? "展开" : "隐藏"}
          </a>
        </p>
      </div>
    );
  }
}

export default Toocomponent;
