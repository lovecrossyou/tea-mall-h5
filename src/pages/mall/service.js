
import request from '../../../services/request';


export async function fetchRecommendList(params){
  return request("mall/recommendList",{
    method:"post",
    body:params
  })
}
