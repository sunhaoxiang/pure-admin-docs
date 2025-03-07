# usePageTransfer

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `navigateWithData` | `(options: RouteLocationRaw \| string, data: any, key?: string) => void` | 跳转到指定页面并携带数据。`options`为路由配置对象或路径字符串，`data`为要传递的数据，`key`为数据存储的唯一标识（默认使用目标路径） |
| `getTransferredData` | `(key?: string) => any` | 获取传递的数据。`key`为数据的唯一标识（默认使用当前路径） |
| `clearTransferredData` | `(key?: string) => void` | 清除传递的数据。`key`为数据的唯一标识（默认使用当前路径） |
