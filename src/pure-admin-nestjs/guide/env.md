# 环境变量

## 文件

环境变量位于项目根目录下 `.env` 、 `.env.development` 、 `.env.production`

::: code-group
```bash [.env]
# 【通用】环境变量

# nestjs 服务配置
NEST_SERVER_PORT=3000

# jwt 配置
JWT_SECRET=pure-admin-nestjs
JWT_ACCESS_EXPIRES=1d # 访问令牌过期时间
JWT_REFRESH_EXPIRES=7d # 刷新令牌过期时间

# throttler 配置
THROTTLER_TTL=60000 # 节流时间
THROTTLER_LIMIT=100 # 节流次数
```

```bash [.env.development]
# 【开发】环境变量

# db 配置
DATABASE_URL=postgresql://postgres:123456@localhost:5432/pure-admin?schema=public

# redis 配置
REDIS_URL=redis://localhost:6379/0
REDIS_TYPE=single
```

```bash [.env.production]
# 【生产】环境变量

# db 配置
DATABASE_URL=postgresql://postgres:123456@xxx.com:5432/pure-admin?schema=public

# redis 配置
REDIS_URL=redis://xxx.com:6379/0
REDIS_TYPE=single
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

