import { Toast} from 'antd-mobile';

export default {
  namespace: 'classify',
  state: {
    selectedInd : 0
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/classify/page') {
          // setTokenFromQueryString(query);
          dispatch({
            type: 'fetch',
            payload: {},
          });
          dispatch({
            type: 'global/setTitle', payload:'首页'
          });
        }
      });
    },
  },
  // 异步
  effects: {
    * fetch({ payload, cb }, { call, put,select }) {

    },
    * setActive({payload},{call,put}){
      yield put({
        type: 'saveActive',
        payload:payload
      });
    }
  },
  // 同步
  reducers: {
    saveActive(state,action){
      console.log(state,action);
      return {...state,selectedInd:action.payload}
    }
  },
};
