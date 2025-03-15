# useLoading

## 概述

`useLoading` 用于管理异步操作的加载状态。它能够跟踪任何异步函数的执行状态，并提供了手动控制加载状态的方法，以及一个自动包装函数来处理异步操作的加载状态管理。这个 Hook 特别适用于处理网络请求、数据加载和其他需要显示加载状态的异步操作。

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `loading` | `boolean` | 加载状态的响应式引用，`true`表示正在加载，`false`表示加载完成 |
| `loadingStart` | `() => void` | 手动开始加载状态的函数 |
| `loadingEnd` | `() => void` | 手动结束加载状态的函数 |
| `loadingFnWrapper` | `<T extends any[], R>(fn: AsyncFunction<T, R> \| SyncFunction<T, R>) => AsyncFunction<T, R>` | 包装函数，自动处理异步或同步函数执行期间的加载状态。接收一个函数作为参数，返回一个新函数，该函数会在执行过程中自动设置和清除加载状态 |
