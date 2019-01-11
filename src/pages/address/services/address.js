import request from "../../../../services/request";

export async function queryAddress(params) {
  return request("/h5/deliveryAddress/list", {
    method: "post",
    body: params
  });
}

export async function queryCreate(params) {
  return request("/h5/deliveryAddress/create", {
    method: "post",
    body: params
  });
}

export async function queryDel(params) {
  return request("/h5/deliveryAddress/delete", {
    method: "post",
    body: params
  });
}

export async function querySetDef(params) {
  return request("/h5/deliveryAddress/setDefault", {
    method: "post",
    body: params
  });
}
