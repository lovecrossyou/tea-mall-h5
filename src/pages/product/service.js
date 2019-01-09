/**
 *Created by tianhaojie .
 *Created on 2019-01-09 .
 *desc
 */
import request from "../../../services/request";
import { apiUrlfun, stringify } from "../../../services/config";

//获取商品详情
export async function rtsGetShopProductDetail(params) {
  return request(`${apiUrlfun("mall")}/v1/commodities?${stringify(params)}`);
}
