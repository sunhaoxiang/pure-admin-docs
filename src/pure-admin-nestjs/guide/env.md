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

# 日志配置
NEST_LOG_DIR=log # 日志目录
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

## 环境变量加载顺序与优先级

在 NestJS 应用中，环境变量的加载遵循以下优先级（从高到低）：

- 命令行中设置的环境变量
- 特定环境文件 (.env.development、.env.production)
- 通用环境文件 (.env)

这意味着如果某个变量在多个文件中定义，高优先级文件中的值会覆盖低优先级文件中的值。例如，如果 `NEST_SERVER_PORT` 同时在 `.env` 和 `.env.development` 中定义，则在开发环境中会使用 `.env.development` 中的值。

## 在代码中使用环境变量

### 使用 `ConfigService`

``` ts
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  
  getServerPort(): number {
    // 第二个参数为默认值，当环境变量不存在时使用
    return this.configService.get<number>('NEST_SERVER_PORT', 3000)
  }
  
  getJwtConfig() {
    return {
      secret: this.configService.get<string>('JWT_SECRET'),
      accessExpires: this.configService.get<string>('JWT_ACCESS_EXPIRES'),
      refreshExpires: this.configService.get<string>('JWT_REFRESH_EXPIRES'),
    }
  }
}
```

### 直接使用 `process.env`

虽然不推荐，但在某些场景下也可以直接这样使用：

``` ts
const serverPort = process.env.NEST_SERVER_PORT || 3000
```
