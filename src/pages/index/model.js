import { Toast } from 'antd-mobile';

export default {
  namespace: 'index',
  state: {
    firstList: [],
    SubcategoriesList: [],
    activeTab: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({
            type: 'category/GetCategorysList',
            payload: {},
          });
          dispatch({
            type: 'global/setTitle', payload:'商品列表'
          });
        }
      });
    },
  },
  effects: {

  },
  reducers: {

  },
};
