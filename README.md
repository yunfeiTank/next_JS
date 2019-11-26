# next_JS

安装

```
npm install --save next react react-dom
```
将下面脚本添加到package.json中

```
{
    "scripts":{
        "dev":"next",
        "build":"next build",
        "start":"next start"
    }
}
```

* Next.js只支持React 16；

运行 npm run dev 命令并打开 http://localhost:3000。 如果你想使用其他端口，可运行 npm run dev -- -p <设置端口号>.

目前为止我们可以了解到:

自动打包编译 (使用 webpack 和 babel)
热加载
以 ./pages作为服务端的渲染和索引
静态文件服务. ./static/ 映射到 /static/ (可以 创建一个静态目录 在你的项目中)