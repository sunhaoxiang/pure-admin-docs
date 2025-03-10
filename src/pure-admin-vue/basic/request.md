# 网络请求

::: info 说明
项目使用 [Axios](https://axios-http.com/zh/) 做为异步请求工具，并进行了简单的封装。
:::

## 接口请求

### 设置 baseURL

在根目录 `.env.*` 文件里的 `VITE_API_BASEURL` 这个参数就是配置 Axios 的 `baseURL` 。

例如项目的真实接口请求地址为：

- `https://api.test.com/news/list`
- `https://api.test.com/news/create`
- `https://api.test.com/shop/info`

则可设置为 `VITE_API_BASEURL=https://api.test.com`

### 请求调用

``` ts
import { request } from '@/utils/request'

// GET 请求
request.get('/user', {
  params: {
    page: 1,
    pageSize: 10,
  },
}).then((res) => {
  // 后续业务代码
})

// POST 请求
request.post('/user', {
  username: 'pure-admin',
  password: '123456'
}).then((res) => {
  // 后续业务代码
})
```
