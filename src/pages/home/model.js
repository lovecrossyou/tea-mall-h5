import { Toast} from 'antd-mobile';

export default {
  namespace: 'classify',
  state: {
    category_list:[],
    category_products:[],
    categoryIndex:0
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
  },
  // 同步
  reducers: {

  },
};
