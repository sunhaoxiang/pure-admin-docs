# 快速开始

## 准备工作

### 环境要求

使用 `Node.js 20` 及以上版本 ，如果使用 `Node.js 20`，最低支持版本为 `20.9.0` ，如果使用 `Node.js 22`，最低支持版本为 `22.11.0` 。

在 `Visual Studio Code` / `Cursor` 里安装以下扩展：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

### 下载源码

```bash
git clone https://github.com/sunhaoxiang/pure-admin-vue.git
```

### 配置环境变量

在项目根目录创建 `.env.development` 文件，并将 `.env.[mode].template` 中的所有内容复制进去，并修改相关内容：

``` bash
# 修改为你的服务运行端口
VITE_PORT=5173

# 修改为你的 API 接口地址
VITE_API_BASEURL=http://localhost:3000
```

### 安装依赖


```bash
pnpm i
```

### 运行项目

```bash
pnpm dev
```
