/**
 *日期: 2019/1/14
 *作者: xiannvrong
 *功能:
 */
export default {
  // 支持值为 Object 和 Array
  "POST /h5/category/list": {
    code: 0,
    list: [
      { title: "首页", content: "111111", id: 0 },
      { title: "新品", content: "222222", id: 2 },
      { title: "热门", content: "333333", id: 3 },
      { title: "活动", content: "444444", id: 4 }
    ]
  },

  // GET POST 可省略
  "POST /h5/category/categoryById": {
    code: 0,
    list: [
      {
        secondCategoryId: 1,
        secondCategoryName: "张一元福建铁观音福建铁福建铁观音",
        secondCategoryImageUrl:
          "http://123.57.161.212:8080/group1/M00/00/47/ezmh1Fr_7zqAIgBGAADRxjbfV-Q744.png",
        secondCategoryPrice: "156"
      },
      {
        secondCategoryId: 2,
        secondCategoryName: "朱理哲福建铁观音福建铁福建铁观音",
        secondCategoryImageUrl:
          "http://123.57.161.212:8080/group1/M00/00/48/ezmh1Fr_7-CAK7iLAAEHhzvm9AE965.png",
        secondCategoryPrice: "256"
      },
      {
        secondCategoryId: 3,
        secondCategoryName: "巴拉巴拉福建铁观音福建铁福建铁观音",
        secondCategoryImageUrl:
          "http://123.57.161.212:8080/group1/M00/00/48/ezmh1Fr_8BuABftqAAB7yVLT5Zs904.png",
        secondCategoryPrice: "356"
      },
      {
        secondCategoryId: 4,
        secondCategoryName: "王强福建铁观音福建铁福建铁观音",
        secondCategoryImageUrl:
          "http://123.57.161.212:8080/group1/M00/00/48/ezmh1Fr_8CiAXQ5fAABHspd4cbo500.png",
        secondCategoryPrice: "456"
      }
    ]
  }
};
