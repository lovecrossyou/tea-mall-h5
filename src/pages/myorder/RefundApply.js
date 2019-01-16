import { connect } from "dva";
import React, { PureComponent } from "react";
import { Navigator } from "../../components/navigator";
/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */
class RefundApply extends PureComponent {
  render() {
    return (
      <div>
        <Navigator title={"退款申请"} />
      </div>
    );
  }
}
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApply);
