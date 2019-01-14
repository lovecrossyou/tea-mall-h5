/**
 *Created by tianhaojie .
 *Created on 2019-01-08 .
 *desc
 */
import { Toast } from "antd-mobile";
import { querybannerList } from "../service";

export default {
  namespace: "product",
  state: {
    bannerList: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/product") {
          dispatch({
            type: "getBannerList",
            payload: {}
          });
        }
      });
    }
  },
  effects: {
    *getBannerList({ payload }, { call, put }) {
      const response = yield call(querybannerList, payload);
      const { code, message, list } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "saveBannerList",
          payload: list
        });
        // 一级分类第一个id，获取子分
      }
    }
  },
  reducers: {
    saveBannerList(state, action) {
      return {
        ...state,
        bannerList: action.payload
      };
    }
  }
};
