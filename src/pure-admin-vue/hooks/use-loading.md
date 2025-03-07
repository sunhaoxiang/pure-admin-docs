# useLoading

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `loading` | `Ref<boolean>` | 加载状态的响应式引用，`true`表示正在加载，`false`表示加载完成 |
| `loadingStart` | `() => void` | 手动开始加载状态的函数 |
| `loadingEnd` | `() => void` | 手动结束加载状态的函数 |
| `loadingFnWrapper` | `<T extends any[], R>(fn: AsyncFunction<T, R> \| SyncFunction<T, R>) => AsyncFunction<T, R>` | 包装函数，自动处理异步或同步函数执行期间的加载状态。接收一个函数作为参数，返回一个新函数，该函数会在执行过程中自动设置和清除加载状态 |
