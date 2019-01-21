/**
 *Created by tianhaojie .
 *Created on 2019-01-18 .
 *desc
 */
import { Toast } from "antd-mobile";
import { queryEndorsementDetail } from "../service";
export default {
  namespace: "endorsement",
  state: {
    detail: { endorsement_user_Info: {} }
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({pathname,query}) => {
  //
  //         if (pathname === '/endorsement') {
  //           dispatch({
  //             type: "getEndorsementDetail",
  //             payload: {}
  //           });
  //         }
  //     })
  //
  //   }
  // },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/endorsement") {
          dispatch({
            type: "getEndorsementDetail",
            payload: {}
          });
        }
      });
    }
  },
  // effect:{
  //
  //   *getEndorsementDetail({ payload }, { call, put }){
  //
  //     console.log("vvvvvvvvvvvvvvv");
  //     const response = yield call(queryEndorsementDetail,payload);
  //     const { code, message, detail } = response;
  //
  //     if (code!=0){
  //       Toast.fail(message)
  //     } else {
  //       yield put({
  //         type: "saveEndorsementDetail",
  //         payload:detail
  //       })
  //     }
  //
  //   }
  // },
  effects: {
    *getEndorsementDetail({ payload }, { call, put }) {
      const response = yield call(queryEndorsementDetail, payload);
      const { code, message, detail } = response;

      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: "saveEndorsementDetail",
          payload: detail
        });
        // 一级分类第一个id，获取子分
      }
    }
  },

  reducers: {
    saveEndorsementDetail(state, action) {
      return {
        ...state,
        detail: action.payload
      };
    }
  }
};
