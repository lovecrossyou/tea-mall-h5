import { Toast } from "antd-mobile";
import { categoryList, subcategoriesList } from "../service";

export default {
  namespace: "category",
  state: {
    firstList: [],
    subcategoriesList: [],
    activeTab: null
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/category") {
          dispatch({
            type: "getCategorysList",
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
    *getCategorysList({ payload }, { call, put }) {
      const response = yield call(categoryList, payload);
      const { code, list } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "saveGetagoryData",
          payload: {
            firstList: list
          }
        });

        // 一级分类第一个id，获取子分类
        // subcategoriesList
        const result = yield call(subcategoriesList, {});
        yield put({
          type: "saveSubCategoriesList",
          payload: {
            subcategoriesList: result.list
          }
        });
      }
    },

    *getSubcategories({ payload }, { call, put }) {
      const response = yield call(subcategoriesList, payload);
      const { code, data } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "saveSubCategoriesList",
          payload: {
            SubcategoriesList: data,
            activeTab: payload.categoryId
          }
        });
      }
    }
  },
  reducers: {
    saveGetagoryData(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    saveSubCategoriesList(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
