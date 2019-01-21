/**
 *Created by tianhaojie .
 *Created on 2019-01-18 .
 *desc
 */
import request from "../../../services/request";
import { apiUrlfun, stringify } from "../../../services/config";

export async function queryEndorsementDetail() {
  return request("endorsement/detail", {
    method: "post"
  });
}
