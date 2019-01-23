import { Toast} from 'antd-mobile';
import { fetchRecommendList } from './service';

export default {
  namespace: 'mall',
  state: {
    recommendList:[]
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          // setTokenFromQueryString(query);
          dispatch({
            type: 'fetch',
            payload: {},
          });
        }
      });
    },
  },
  // 异步
  effects: {
    * fetch({ payload, cb }, { call, put, select }) {
      const recommendList = yield call(fetchRecommendList,payload);
      console.log(222,recommendList,payload);
      yield put({
        type:"saveRecommendList",
        payload:recommendList
      })

    }
  },
  // 同步
  reducers: {
    saveRecommendList(state,action){
      return {...state,recommendList:action.payload}
    }
  },
};
