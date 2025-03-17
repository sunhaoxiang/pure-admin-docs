# 构建部署

## 普通构建

项目开发完成之后，在项目根目录下执行以下命令进行构建：

``` bash
pnpm build
```
构建完成后，项目会生成 `dist` 目录，将生成的 `dist` 目录和原本项目中的 `prisma` 文件夹 、 原本项目中的 `package.json` 、 `pnpm-lock.yaml` 、 `.env` 、 `.env.production` 文件上传到服务器中，目录结构如下：

``` text
pure-admin-nestjs/
├── dist/
├── prisma/
├── package.json
├── pnpm-lock.yaml
├── .env
└── .env.production
```

在服务器中进入项目文件夹，并运行以下命令启动服务：

``` bash
pnpm i
pnpm prisma:generate
NODE_ENV=production pm2 start dist/src/main.js --name server
```

## Docker 构建

### 打包镜像

在源码根目录运行：

``` bash
docker build -t pure-admin-nestjs . 
```

### 运行镜像

``` bash
docker run -d \
  --name pure-admin-nestjs \
  -p 3000:3000 \
  -v /path/on/host/logs:/app/logs \
  pure-admin-nestjs
```

- 将 `--name pure-admin-nestjs` 更改为 `--name [你的容器名称]`
- 将 `-p 3000:3000` 更改为 `-p [你要运行的端口]:3000`
- 将 `-v /path/on/host/logs:/app/logs` 更改为 `-v [你要存放 logs 的路径]:/app/logs`

然后执行命令运行服务。
