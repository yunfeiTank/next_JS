const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
// const withCss = require('@zeit/next-css')

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        // distDir: 'build', //构建目录
        pageExtensions: ['jsx', 'js', 'ts'],    //文件扩展
        serverRuntimeConfig: {   //服务端配置
            mySecret: 'secret'
        },
        publicRuntimeConfig: {   //客户端
            staticFolder: '/static',
            mySecret: process.env.MY_SECRET
        },
        // generateBuildId: async () => {
        //     // For example get the latest git commit hash here
        //     return 'my-build-id'
        // },
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            const { dev, isServer } = options
            const {
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                lessLoaderOptions = {}
            } = nextConfig

            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }
                ]
            })
            options.defaultLoaders.css = cssLoaderConfig(config, {
                extensions: ['css'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
            })
            config.module.rules.push({
                test: /\.less$/,
                use: options.defaultLoaders.less
            })
            config.module.rules.push({
                test: /\.css$/,
                use: options.defaultLoaders.css
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}
