export default {
  history: 'hash',
  targets:{
    ios:9
  },
  publicPath:'./',
  base:'/h5/',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      immer: true,
      // hd: true,
    }],
  ],
  proxy: {
    "/api": {
      target: "https://www.xiteng.com/xitenggamejar/",
      changeOrigin: true,
      secure: false,
      pathRewrite: { "^/api" : "" }
    }
  },
}
