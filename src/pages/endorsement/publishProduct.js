import React,{PureComponent} from 'react';
import {connect} from 'dva';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './publishProduct.css';

import icon_location  from './image/icon_location@2x.png'
import btn_left  from './image/btn_left@2x.png'
import icon_endorsement from './image/icon_endorsement@2x.png'
import tea_img from './image/tea_img.png'

const SelectLocation = function(data) {
  console.log(11111111111111,data);
  if(data.selectProductArr.isImg == 0){
    return <div className={styles.usual_address}>
      {
        data.selectProductArr.product.map((item,i)=>{
          return <div className={styles.usual_address_item} key={i}>{item.address}</div>
        })
      }
    </div>

  }else{
    return <div className={styles.usual_pic}>
      {
        data.selectProductArr.product.map((item,i)=>{
          return <div key={i} className={styles.usual_pic_item}>
            <img src={item.imgsrc} alt=""/>
          </div>
        })
      }
    </div>
  }

}

const PublishProductLocation = function(data) {

  return <div className={styles.publish_product_location}>
    <div className={styles.choose_location}>
      <span className={styles.choose_location_left}><img src={data.imgLeft} alt=""/>{data.tit}</span>
      <span className={styles.choose_location_right}><img src={btn_left} alt=""/></span>
    </div>
    <SelectLocation selectProductArr={data.productArr} />

  </div>
};

class PublishProduct extends PureComponent{
  render(){
    return <div className={styles.publish_product_container}>
          发布
        <div className={styles.publish_product_specific}>
          <div className={styles.publish_product_specific_video}>视频</div>
          <div className={styles.publish_product_specific_tit}>
            <TextareaItem
              placeholder="添加标题"
              count={10}
            />
          </div>
          <div className={styles.publish_product_specific_content}>
            <TextareaItem
              placeholder="说说你的心得，可能会帮助更多人哦~"
              rows={5}
              count={100}
            />
          </div>
        </div>
        <PublishProductLocation
                      imgLeft={icon_location}
                      tit="选择位置"
                      productArr={{
                        product:[
                          {address:"百万庄大街粮科大厦"},
                          {address:"天天朝阳"},
                          {address:"青年路"},
                          {address:"青年路"},
                          {address:"青年路"},
                          {address:"朝阳大悦城"}
                        ],
                        isImg:0
                      }}
        />
        <PublishProductLocation
                      imgLeft={icon_endorsement}
                      tit="我要代言"
                      productArr={{
                        product:[
                          {imgsrc:tea_img},
                          {imgsrc:tea_img},
                          {imgsrc:tea_img},
                          {imgsrc:tea_img},
                          {imgsrc:tea_img}
                        ],
                        isImg:1
                      }}
        />


      </div>
  }
}
export default connect(state=>{
  return{

  }
})(PublishProduct)

