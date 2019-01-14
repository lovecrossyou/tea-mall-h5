/**
 *Created by tianhaojie .
 *Created on 2019-01-08 .
 *desc
 */
import { Toast } from "antd-mobile";
import { rtsGetShopProductDetail, rtsGetShopStoreDetail } from "../service";

export default {
  namespace: "product",
  state: {
    firstList: [],
    SubcategoriesList: [],
    activeTab: null
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/product") {
          dispatch({
            type: "getProductDetail",
            payload: {}
          });
          dispatch({
            type: "global/setTitle",
            payload: "商品列表"
          });
        }
      });
    }
  },
  effects: {
    *GetShopProductDetail({ payload }, { call, put }) {
      const response = yield call(rtsGetShopProductDetail, payload);
      const { code, message, data } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "getProductDetail",
          payload: {
            firstList: data
          }
        });
        // 一级分类第一个id，获取子分
      }
    }
  },
  reducers: {
    getProductDetail(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
