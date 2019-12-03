const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
module.exports = {
  useFileSystemPublicRoutes: false,
  // generateEtags: false,
  webpack: (config, { buildId, dev, isServe, defaultloaders }) => {
    const originalEntry = config.entry
    //兼容处理
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }
    return config
  },
  webpackDevMiddleware: config => {
    return config;
  },
  // 客户端运行对象
  serverRuntimeConfig: {
    mySecret: 'yunfei'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    mySecret: process.env.MY_SECRET // Pass through env variables
  }
};
/* 配置less */
module.exports = withLess({
  /* config options here */
});

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})

/* webpack 参数解析 */
/*
  buildId - 字符串类型，构建的唯一标示
  dev - Boolean型，判断你是否在开发环境下
  isServer - Boolean 型，为true使用在服务端, 为false使用在客户端.
  defaultLoaders - 对象型 ，内部加载器, 你可以如下配置
  babel - 对象型，配置babel - loader.
  hotSelfAccept - 对象型， hot - self - accept - loader配置选项.这个加载器只能用于高阶案例。如 @zeit/next-typescript添加顶层 typescript 页面。
*/