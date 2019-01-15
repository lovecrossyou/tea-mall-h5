/**
 *Created by tianhaojie .
 *Created on 2019-01-15 .
 *desc
 */
import { Toast } from "antd-mobile";
import { requestOrderList } from "../service";
export default {
  namespace: "myorder",
  state: {
    orderList: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "myorder") {
          dispatch({
            type: "getOrderList",
            payload: {}
          });
        }
      });
    }
  },
  effects: {
    *getOrderList({ payload }, { call, put }) {
      const response = yield call(requestOrderList, payload);

      const { code, list, message } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "saveOrderList",
          payload: list
        });
      }
    }
  },
  reducers: {
    saveOrderList(state, action) {
      return {
        ...state,
        orderList: action.payload
      };
    }
  }
};
