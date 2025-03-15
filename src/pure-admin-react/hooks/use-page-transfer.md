# usePageTransfer

## 概述

`usePageTransfer` 是一个用于在应用程序中在页面跳转时传递数据的自定义 Hook。它解决了导航时无法直接传递复杂数据的问题，提供了一种简便的方式在路由之间传递任意数据，而不必依赖于 URL 参数或全局状态管理。

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `navigateWithData` | `(options: RouteOptions, data: any, key?: string, navigateOptions?: NavigateOptions) => void` | 跳转到指定页面并携带数据。`options`为路由配置对象或路径字符串，`data` 为要传递的数据，`key` 为数据存储的唯一标识（默认使用目标路径）， `navigateOptions` 为 React Router 的导航选项  |
| `getTransferredData` | `(key?: string) => any` | 获取传递的数据。 `key` 为数据的唯一标识（默认使用当前路径） |
| `clearTransferredData` | `(key?: string) => void` | 清除传递的数据。 `key` 为数据的唯一标识（默认使用当前路径） |
