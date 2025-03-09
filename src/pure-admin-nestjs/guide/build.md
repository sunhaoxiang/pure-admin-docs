# 构建部署

## 普通构建

项目开发完成之后，在项目根目录下执行以下命令进行构建：

``` bash
pnpm build
```

构建完成后，项目会自动将 `prisma` 、 `package.json` 、 `pnpm-lock.yaml` 、 `.env` 、 `.env.production` 等文件复制到 dist 目录中。

将 dist 目录上传到服务器中，并运行以下命令启动服务：

``` bash
pnpm i
pnpm prisma:generate
NODE_ENV=production pm2 start src/main.js --name server
```

## Docker 构建
