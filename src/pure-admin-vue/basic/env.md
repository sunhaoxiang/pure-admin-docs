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

::: info 说明
自定义环境变量，及其他环境变量相关内容，请查看 [Vite](https://cn.vitejs.dev/guide/env-and-mode.html) 文档。
:::
