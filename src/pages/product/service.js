/**
 *Created by tianhaojie .
 *Created on 2019-01-09 .
 *desc
 */
import request from "../../../services/request";
import { apiUrlfun, stringify } from "../../../services/config";

export async function querybannerList() {
  return request("product/bannerList", {
    method: "post"
  });
}
