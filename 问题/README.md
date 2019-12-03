## 客户端与服务端在数据交互是使用工具的问题

- 注意：使用a之外的标签而且没有通过passHref的链接可能使导航正常；但搜索引擎爬行检测时，将不会识别成链接（由于缺少href属性）对网站的SEO产生影响


## 使用typescript

- 安装 npm install --save-dev typescript @types/react @types/node
* 当使用TS时，next会自动识别，并配置TS

## 开发时，注意

- 本地开发引入插件后，需要将app下的.next删除，重新使用yarn build编译
