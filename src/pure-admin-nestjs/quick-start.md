# 快速开始

## 准备工作

### 环境要求：

- **Node.js** 如果使用 `Node.js 20`，最低支持版本为 `20.9.0` ，如果使用 `Node.js 22`，最低支持版本为 `22.11.0`

- **PostgreSQL** 推荐使用 `17.x` 版本

- **Redis** 推荐使用 `7.x` 版本

### 编辑器扩展

在 `Visual Studio Code` / `Cursor` 里安装以下扩展：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

### 下载源码

```bash
git clone https://github.com/sunhaoxiang/pure-admin-nestjs.git
```

### 配置 PostgreSQL 和 Redis 连接

在项目根目录创建 `.env.development` 文件，并将 `.env.[mode].template` 中的所有内容复制进去，并修改相关内容：

``` bash
# 修改为你的 PostgreSQL 连接
DATABASE_URL=postgresql://postgres:123456@localhost:5432/pure-admin?schema=public

# 修改为你的 Redis 连接
REDIS_URL=redis://localhost:6379/0
```

### 配置管理员账号

在 `prisma/seed.ts` 文件中，修改管理员账号相关内容：

``` ts
// 修改为你的管理员账号
const SUPER_ADMIN_USERNAME = 'pure-admin' // 用户名
const SUPER_ADMIN_PASSWORD = '123456' // 密码
const SUPER_ADMIN_EMAIL = 'admin@pure-admin.com' // 邮箱
const SUPER_ADMIN_NICKNAME = 'admin' // 昵称
const SUPER_ADMIN_PHONE = '13333333333' // 手机号
```

### 执行以下命令


``` bash
pnpm i # 安装依赖

pnpm prisma:generate # 生成 Prisma Client 代码

pnpm prisma:migrate:dev # 初始化数据库
```


### 运行项目

``` bash
pnpm dev
```
