# 环境变量

## 文件

环境变量位于项目根目录下 `.env` 、 `.env.development` 、 `.env.production`

::: code-group
```bash [.env]
# 【通用】环境变量

# 项目名称
VITE_APP_TITLE=Pure Admin

# 端口号
VITE_PORT=5173
```

```bash [.env.development]
# 【开发】环境变量

# 网站地址前缀
VITE_BASE_URL=/

# API 地址前缀
VITE_API_URL=http://localhost:3000
```

```bash [.env.production]
# 【生产】环境变量

# 网站地址前缀
VITE_BASE_URL=/

# API 地址前缀
VITE_API_URL=https://xxx.com
```
:::

### `.env`

- 作用：适用于所有环境，里面定义的变量会在任何环境下都能访问。
- 用法：一般放置一些通用的配置。

### `.env.development`

- 作用：仅适用于开发环境。运行 pnpm dev 时，会加载这个文件中的环境变量。
- 用法：适合放置开发阶段的配置。

### `.env.production`

- 作用：仅适用于生产环境。运行 pnpm build 时，会加载这个文件中的环境变量。
- 用法：适合放置生产阶段的配置。

## 环境变量加载顺序与优先级

环境变量的加载遵循以下优先级（从高到低）：

- 特定环境文件 (.env.development、.env.production)
- 通用环境文件 (.env)

这意味着如果某个变量在多个文件中定义，高优先级文件中的值会覆盖低优先级文件中的值。例如，如果 `VITE_PORT` 同时在 `.env` 和 `.env.development` 中定义，则在开发环境中会使用 `.env.development` 中的值。

## 环境变量命名规则

在 Vite 项目中，只有以 `VITE_` 开头的环境变量才会被暴露给客户端代码。这是一个重要的安全机制，确保敏感信息不会被意外包含在客户端代码中。

``` bash
# 会暴露给客户端代码
VITE_API_URL=https://api.example.com

# 不会暴露给客户端代码
SECRET_KEY=my-secret-key
```

## 在代码中使用环境变量

### 在项目中使用

``` ts
// api/request.ts
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export default request
```

### 默认环境变量

Vite 提供了一些内置的环境变量：

``` ts
console.log(import.meta.env.MODE);          // 当前模式，如 development 或 production
console.log(import.meta.env.BASE_URL);      // 部署的基本URL前缀
console.log(import.meta.env.PROD);          // 是否为生产环境
console.log(import.meta.env.DEV);           // 是否为开发环境
console.log(import.meta.env.SSR);           // 是否为服务器端渲染
```

::: tip 说明
更多环境变量相关内容，请查看 [Vite](https://cn.vitejs.dev/guide/env-and-mode.html) 文档。
:::
