import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';


import Home from './home/index'
import Category from './category/index'
import Shop from './shop/index'
import Product from './product/index'

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab'
    };
  }


  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={{uri:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'}}
            selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'}}
            selected={this.state.selectedTab === 'homeTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              });
            }}
            data-seed="logId"
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg'}}
            selectedIcon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'}}
            title="分类"
            key="category"
            badge={'new'}
            selected={this.state.selectedTab === 'categoryTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'categoryTab',
              });
            }}
            data-seed="logId1"
          >
            <Category/>
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg'}}
            selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'}}
            title="店铺"
            key="shop"
            dot
            selected={this.state.selectedTab === 'shopTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'shopTab',
              });
            }}
          >
            <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="商品详情"
            key="product"
            selected={this.state.selectedTab === 'productTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'productTab',
              });
            }}
          >
            <Product/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Index;
