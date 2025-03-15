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

## 请求拦截器

项目中设置了请求拦截器，主要用于在发送请求前自动处理认证信息：

``` ts
request.interceptors.request.use((config) => {
  // 获取用户存储中的 token
  const { accessToken, refreshToken } = useUserStore.getState()
  
  // 设置当前语言
  const appStore = useAppStore()
  const { currentLocale } = useAppStore.getState()
  config.headers['x-lang'] = currentLocale
  
  // 登录接口不需要添加认证头
  if (config.url !== '/user/login') {
    config.headers.authorization = `Bearer ${accessToken}`
  }
  
  // 刷新 token 接口使用 refreshToken 作为认证
  if (config.url === '/user/refresh') {
    config.headers.authorization = `Bearer ${refreshToken}`
  }
  
  return config
}, error => Promise.reject(error))
```

## 响应拦截器

响应拦截器处理统一的响应格式和错误处理：

``` ts
request.interceptors.response.use(
  (config) => {
    const { data } = config
    
    // 成功响应处理
    if (data.code >= 200 && data.code < 300) {
      // 直接返回数据部分
      return data.data
    } else {
      // 显示错误消息
      message.error(data.message)
      
      return Promise.reject(data)
    }
  },
  // 错误处理在下面的 Token 刷新部分
)
```

## Token 自动刷新机制

项目实现了 Token 自动刷新机制，当访问接口返回 401 未授权错误时，会自动尝试刷新 Token 并重新发起请求。

## 最佳实践

- **API 封装**：将接口调用封装到专门的 API 文件中，而不是直接在组件中使用 request

``` ts
// apis/user.ts
import { request } from '@/utils/request'

export function getUserList(params) {
  return request.get('/user', { params })
}

export function createUser(data) {
  return request.post('/user', data)
}

// 在组件中使用
import { getUserList } from '@/apis/user'

async function loadUsers() {
  const users = await getUserList({ page: 1 })
  // 处理数据
}
```

- **错误处理**：在业务代码中正确处理可能的异常

``` ts
try {
  const result = await createUser(userData)
  message.success('创建用户成功')
  return result
} catch (error) {
  // 拦截器已经显示了错误消息，这里可以做额外处理
  return null
}
```

- **并发请求**：使用 `Promise.all` 处理多个并发请求

``` ts
const [users, roles] = await Promise.all([
  getUserList(),
  getRoleList()
])
```
