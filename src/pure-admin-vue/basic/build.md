# 构建部署

## 构建

项目开发完成之后，在项目根目录下执行以下命令进行构建：

``` bash
pnpm build
```

构建打包成功之后，会在根目录生成对应的应用下的 dist 文件夹，里面就是构建打包好的文件

## 部署

部署时可能会发现资源路径不对，只需要修改.env.production 文件即可。

如最终访问地址为: https://www.example.com/app ，只需要进行以下修改：

``` bash
# 根据自己存放的静态资源路径来更改配置
VITE_BASE_URL=/app/
```

然后在 nginx 配置文件中配置：

``` bash
server {
  location /app/ {
    alias /path/to/dist/;
    try_files $uri $uri/ /app/index.html
    index index.html index.htm;
  }
}
```
