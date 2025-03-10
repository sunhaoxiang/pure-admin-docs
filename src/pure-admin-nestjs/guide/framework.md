# 框架

## NestJS

本项目基于 NestJS 11，在开始开发之前，您应该对 NestJS 的以下内容有一个基本的了解：

- Controllers（控制器）
- Providers（提供者）
- Modules（模块）
- Middleware（中间件）
- Exception filters（异常过滤器）
- Pipes（管道）
- Guards（守卫）
- Interceptors（拦截器）

**官方文档（英文）：**[https://docs.nestjs.com](https://docs.nestjs.com)

**中文文档：**[https://nestjs.inode.club](https://nestjs.inode.club)

### NestJS 应用中的请求处理流程：

``` text
请求
 ↓
中间件 (Middlewares) [自上而下按顺序执行]
 ↓
守卫 (Guards) [自上而下按顺序执行]
 ↓
拦截器 (Interceptors) [自上而下按顺序执行] (请求阶段)
 ↓
管道 (Pipes) [自上而下按顺序执行]
 ↓
路由处理器 (Route Handler)
 ↓
拦截器 (Interceptors) [自下而上按顺序执行] (响应阶段)
 ↓
异常过滤器 (Exception Filters) [自下而上按顺序执行]
 ↓
响应
```

## 数据库

项目数据库使用的是 `PostgreSQL`，同时使用 `Prisma` 作为 ORM（对象关系映射）工具。项目中所有的 schema 文件都在 `prisma/schema` 文件夹中。

**Prisma 官方文档（英文）：**[https://www.prisma.io/docs](https://www.prisma.io/docs)

**Prisma 中文文档：**[https://prisma.yoga](https://prisma.yoga)

## 缓存

项目使用 `Redis` 作为缓存数据库，并封装了一些自定义装饰器，让您可以简便的对数据进行缓存。
