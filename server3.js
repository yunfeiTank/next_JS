const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const proxy = require('koa2-proxy-middleware')
const dev = process.env.NODE_ENV !== 'production'  // 名字必须是这一个名字
const app = next({ dev })
const handler = app.getRequestHandler() //

const options = {
    targets: {
        '/api2/(.*)': {
            target: 'https://movie.douban.com',
            changeOrigin: true,
            pathRewrite: {
                '/api2/': '', // rewrite path
            }
        }
    }
}

app.prepare().then(() => { // 等待页面编译完成
    const server = new Koa()
    const router = new Router()
    server.use(bodyParser())
    server.use(proxy(options))
    server.use(async (ctx, next) => {
        if (!ctx.url.match(/api2?/) && !ctx.url.match(/j\//)) {
            await handler(ctx.req, ctx.res) // 等待nextjs执行完成
            ctx.respond = false
        }
        next()
    })
    router.get('/api/data', async (ctx, next) => {
        ctx.body = { a: 1, b: 2 }
        next()
    })
    server.use(router.routes())
    server.listen(3000, () => {
        console.log('listen on 3000')
    })
})