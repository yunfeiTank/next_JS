# 问题

- 服务端渲染时 componentWillMount 生命周期无效

### 使用 CSS / Sass / Less / Stylus files
* 支持用.css, .scss, .less or .styl，需要配置默认文件 next.config.js，具体可查看下面链接

- @zeit/next-css
- @zeit/next-sass
- @zeit/next-less
- @zeit/next-stylus

### 生成<head>

我们设置一个内置组件来装载<head>到页面中。

```
import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>
```


+ 定义key属性来避免重复的<head>标签，保证<head>只渲染一次

+ 只有第二个<meta name="viewport" />才被渲染。

+ 注意：在卸载组件时，<head>的内容将被清除。请确保每个页面都在其<head>定义了所需要的内容，而不是假设其他页面已经加过了

### 获取数据以及组件生命周期

* 如果你需要一个有状态、生命周期或有初始数据的 React 组件（而不是上面的无状态函数）

* 当页面渲染时加载数据，我们使用一个异步方法getInitialProps。他将异步获取JS普通对象，并绑定在props上

* 当服务渲染时，getInitialProps将会把数据序列化，就像JSON.stringify
