# 日志

::: info 说明
本项目使用 [winston](https://github.com/winstonjs/winston) 与 [nest-winston](https://github.com/gremo/nest-winston) 集成，提供了完整的日志记录解决方案。
:::

## 日志模块功能

- 多级别日志（http、info、error）
- 日志文件按日期自动轮转
- 异常捕获与记录
- 控制台输出与文件存储

## 配置日志输入目录

在项目根目录的 `.env` 文件中，添加以下配置：

``` bash
# 日志存储路径配置
NEST_LOG_DIR=log
```

不同环境可以设置不同的路径：

``` bash
# 开发环境 (.env.development)
LOG_DIR=log

# 测试环境 (.env.test)
LOG_DIR=test_logs

# 生产环境 (.env.production)
LOG_DIR=/var/log/your-app
```

## 日志级别说明

本项目配置了以下几种日志级别：

- `http`: 记录HTTP请求相关信息
- `info`: 记录普通信息性日志
- `error`: 记录错误信息
- `exception`: 记录未捕获异常


`Winston` 中日志级别优先级为：error > warn > info > http > verbose > debug > silly

## 日志文件组织结构

日志文件会按照不同级别和日期自动分类，格式如下：

``` text
${LOG_DIR}/
├── http/
│   └── http-YYYY-MM-DD.log
├── info/
│   └── info-YYYY-MM-DD.log
├── error/
│   └── error-YYYY-MM-DD.log
└── exception/
    └── exception-YYYY-MM-DD.log
```

## 在项目中使用日志

``` ts
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

@Injectable()
export class UserService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  getHello(): string {
    this.winston.info('Hello service called', { 
      context: 'UserService', 
      user: 'user1',
    })
  }
}
```

## 最佳实践

使用合适的日志级别：

- `error`: 记录影响功能或业务的错误
- `warn`: 记录潜在问题或需要关注但不影响主要功能的事件
- `info`: 记录重要业务流程或状态变更
- `http`: 记录API请求/响应
- `debug`: 记录调试信息（仅开发环境）
- `verbose`: 详细的流程追踪（仅开发环境）
