# useForm

## 概述

`useForm` 是一个基于 TanStack Query (React Query) 和 Ant Design 的自定义 Hook，用于处理创建与编辑表单。它提供了一个完整的表单管理解决方案，包括数据获取、表单验证、提交处理和路由导航。

## API 参考

| 参数 | 类型 | 必填 | 默认值 | 描述 |
|------|------|------|-------|------|
| `key` | `string` | 是 | - | 唯一标识符，用于缓存管理 |
| `getApiFn` | `(id: number) => Promise<T>` | 否 | - | 获取详情的 API 函数 |
| `createApiFn` | `(data: any) => Promise<T>` | 是 | - | 创建数据的 API 函数 |
| `updateApiFn` | `(id: number, data: Partial<T>) => Promise<T>` | 是 | - | 更新数据的 API 函数 |
| `initialValues` | `Record<string, any>` | 否 | - | 表单初始值对象 |
| `backAfterSuccess` | `boolean` | 否 | `true` | 操作成功后是否返回上一页 |

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `id` | `string` | 当前操作的数据 ID |
| `title` | `string` | 基于操作模式的标题文本（创建/编辑） |
| `isCreateMode` | `boolean` | 是否为创建模式 |
| `isEditMode` | `boolean` | 是否为编辑模式 |
| `form` | `FormInstance` | Ant Design 表单实例 |
| `formProps` | `FormProps` | 表单属性，可直接绑定到表单组件 |
| `detailData` | `T \| undefined` | 详情数据 |
| `isLoading` | `boolean` | 是否正在加载或提交 |
| `handleSubmit` | `() => Promise<void>` | 提交表单 |
| `handleBack` | `() => void` | 返回上一页 |
