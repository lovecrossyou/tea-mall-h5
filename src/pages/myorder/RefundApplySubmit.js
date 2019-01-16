/**
 *Created by tianhaojie .
 *Created on 2019-01-16 .
 *desc
 */
import React, { PureComponent } from "react";
import { connect } from "dva";
import { Navigator } from "../../components/navigator";

class RefundApplySubmit extends PureComponent {
  render() {
    return (
      <div>
        <Navigator title={"退货申请"} />
      </div>
    );
  }
}
export default connect(state => {
  return {
    store: state.myorder
  };
})(RefundApplySubmit);
