export default {
  // 支持值为 Object 和 Array
  "POST /h5/category/list": {
    code:0,
    list: [
      { title: "热卖", content: "111111", id: 0 },
      { title: "绿茶", content: "222222", id: 2 },
      { title: "红茶", content: "333333", id: 3 },
      { title: "乌龙茶", content: "4444444", id: 4 },
      { title: "黑茶", content: "555555", id: 5 },
      { title: "白茶", content: "666666", id: 6 },
      { title: "黄茶", content: "222222", id: 7 },
      { title: "花草茶", content: "000000", id: 8 },
      { title: "茶具", content: "88888", id: 9 }
    ]
  },

  // GET POST 可省略
  "POST /h5/category/categoryById": {
    code:0,
    list: [{
      imageUrl:'http://img3.imgtn.bdimg.com/it/u=1057513786,1745031695&fm=15&gp=0.jpg',
      title:'绿茶'
    },{
      imageUrl:'http://img4.imgtn.bdimg.com/it/u=3057789590,1789375728&fm=15&gp=0.jpg',
      title:'红茶'
    },{
      imageUrl:'http://img5.imgtn.bdimg.com/it/u=1506298324,1993164493&fm=15&gp=0.jpg',
      title:'黑茶'
    }]
  },

};
