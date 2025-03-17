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
NODE_ENV=production pm2 start dist/src/main.js --name pure-admin-nestjs
```

## Docker 构建

### 打包镜像

在源码根目录运行：

``` bash
docker build -t pure-admin-nestjs . 
```

### 传输到服务器

``` bash
# 保存镜像到本地
docker save -o pure-admin-nestjs.tar pure-admin-nestjs

# 传输到服务器
scp pure-admin-nestjs.tar user@server-ip:/tmp/
```

### 在服务器上加载镜像

``` bash
docker load -i /tmp/pure-admin-nestjs.tar
```

### 运行镜像

命令参数：

- `--name [你的容器名称]`
- `-p [你要运行的端口]:3000`
- `-v [你要在服务器上存放 logs 的路径]:/app/logs`

修改参数，并运行：

``` bash
docker run -d \
  --name pure-admin-nestjs \
  -p 3000:3000 \
  -v /your/app/logs:/app/logs \
  pure-admin-nestjs
```
