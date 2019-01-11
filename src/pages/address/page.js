import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd-mobile';
import styles from './page.css'
import {AddressCell} from "./components/addresscell";
import router from 'umi/router';


const CreateNewAddress = ({onClick}) => {
  return (
    <div className={styles["add-addr-container"]}>
      <Button className={styles["btn-new"]} type='warning' onClick={onClick}>添加新地址</Button>
    </div>
  )
}

class AddressList extends React.Component {
  // 编辑
  addresseEdit = (address)=>{
    this.props.dispatch({
      type:'address/setActive',
      payload:address
    });
    router.push('AddressEdit')
  }

  // 删除
  addressDel = (addr)=>{
    this.props.dispatch({
      type:'address/delete',
      payload:{
        addressId:addr.id
      },
      cb:()=>{
        this.props.dispatch({
          type:'address/fetch'
        })
      }
    });
  };

  // 新建
  createNew = ()=>{
    this.props.dispatch({
      type:'address/saveActive',
      payload:null
    });
    router.push('addressedit')
  }


  render() {
    const store = this.props.store;
    return <div style={{paddingBottom:'140px'}}>
      {
        store.list.map((address,index) => {
          return <AddressCell
            edit={this.addresseEdit}
            del={this.addressDel}
            address={address}
            key={'#'+index}/>
        })
      }
      <CreateNewAddress onClick={this.createNew}/>
    </div>
  }
}


export default connect(state=>{
  return {
    store:state.address
  }
})(AddressList);


//
