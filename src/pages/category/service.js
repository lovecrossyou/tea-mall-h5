/*
 * @Author: Jan-superman
 * @Date: 2018-10-14 16:02:35
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 00:56:22
 */

// 获取商品列表
import request from "../../../services/request";
import { apiUrlfun, stringify } from "../../../services/config";

// export async function rtsGetCommodityList(params) {
//   return request(`${apiUrlfun('mall')}/v1/commodities?${stringify(params)}`);
// }
//
// // 获取一级类目
// export async function rtsGetCategorysList(params) {
//   return request(`${apiUrlfun('mall')}/v1/categories?${stringify(params)}`);
// }
//
// // 获取二级类目
// export async function rtsGetSubcategories(params) {
//   return request(`${apiUrlfun('mall')}/v1/subcategories?${stringify(params)}`);
// }

export async function categoryList() {
  return request("category/list", {
    method: "post"
  });
}

export async function subcategoriesList() {
  return request("category/categoryById", {
    method: "post"
  });
}
