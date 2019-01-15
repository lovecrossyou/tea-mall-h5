/**
 *Created by tianhaojie .
 *Created on 2019-01-14 .
 *desc
 */
import request from "../../../services/request";
import { apiUrlfun, stringify } from "../../../services/config";

export async function requestOrderList() {
  return request("myorder/orderList", {
    method: "post"
  });
}
