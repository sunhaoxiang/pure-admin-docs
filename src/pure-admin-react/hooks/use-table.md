# useTable

## 概述

`useTable` 是一个基于 TanStack Query (React Query) 和 Ant Design 的自定义 Hook，用于简化表格数据的获取、分页、筛选、排序和 CRUD 操作。它提供了与 Ant Design 表格组件集成的状态管理和数据流控制，同时支持数据缓存、表单集成、批量操作等功能。

## API 参考

| 参数 | 类型 | 必填 | 默认值 | 描述 |
|------|------|------|-------|------|
| listApiFn | `(params: any) => Promise<ApiResponse<any>>` | 是 | - | 获取列表数据的 API 函数 |
| deleteApiFn | `(id: number) => Promise<void>` | 否 | - | 删除单个项目的 API 函数 |
| batchDeleteApiFn | `(ids: number[]) => Promise<void>` | 否 | - | 批量删除项目的 API 函数 |
| key | `string` | 是 | - | 用于缓存的唯一键 |
| idKey | `string` | 否 | 'id' | 标识项目的唯一键字段名 |
| cacheEnabled | `boolean` | 否 | true | 是否启用缓存功能 |
| dataStaleTime | `number` | 否 | 600000 (10分钟) | 数据过期时间（毫秒） |
| pagination | `boolean` | 否 | true | 是否启用分页功能 |
| selectable | `boolean` | 否 | false | 是否启用行选择功能 |
| formInitialValues | `Record<string, any>` | 否 | {} | 查询表单的初始值 |
| columns | `TableProps<any>['columns']` | 是 | - | 表格列配置 |
| scrollX | `string \| number` | 否 | '100%' | 表格水平滚动宽度 |
| scrollY | `number \| string` | 否 | - | 表格垂直滚动高度 |
| pageCreatePath | `string` | 否 | - | 创建页面的路径 |
| pageEditPath | `string` | 否 | - | 编辑页面的路径 |

## 返回值

### 表单相关

| 属性 | 类型 | 描述 |
|------|------|------|
| `form` | `FormInstance` | 表单实例，用于访问和控制表单 |

### 表格相关

| 属性 | 类型 | 描述 |
|------|------|------|
| `tableProps` | `TableProps` | 表格属性，可直接绑定到 `<Table>` 组件 |

### 状态指示器

| 属性 | 类型 | 描述 |
|------|------|------|
| `isLoading` | `boolean` | 是否正在加载数据 |
| `isDeleting` | `boolean` | 是否正在删除单条数据 |
| `isBatchDeleting` | `boolean` | 是否正在批量删除数据 |

### 数据

| 属性 | 类型 | 描述 |
|------|------|------|
| `data` | `ApiResponse<any> \| undefined` | 原始 API 响应数据 |
| `list` | `any[]` | 处理后的数据列表 |
| `total` | `number` | 数据总数 |

### 事件处理

| 方法 | 类型 | 描述 |
|------|------|------|
| `handleSearch` | `() => Promise<void>` | 执行搜索操作 |
| `handleReset` | `() => Promise<void>` | 重置表单并刷新数据 |
| `handleCreate` | `(transferData?: Record<string, any> \| null, query?: Record<string, any>) => Promise<void>` | 跳转到创建页面 |
| `handleEdit` | `(data: any, transferData?: Record<string, any> \| null, query?: Record<string, any>) => Promise<void>` | 跳转到编辑页面 |
| `handleDelete` | `(id: number) => Promise<void>` | 删除单条数据 |
| `handleBatchDelete` | `() => Promise<void>` | 批量删除选中的数据 |

### 选择相关

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `selectedState` | `number[]` | 当前选中行的 ID 数组 |
| `selectedCount` | `number` | 当前选中行的数量 |
| `selectedIsEmpty` | `boolean` | 是否没有选中任何行 |
| `setSelectedState` | `(keys: number[]) => void` | 设置选中行 |
| `resetSelectedState` | `() => void` | 重置选中行 |

### 缓存管理

| 方法 | 类型 | 描述 |
|------|------|------|
| `clearSavedState` | `() => void` | 清除缓存的查询状态 |

### 分页相关（当 `pagination` 为 `true` 时可用）

| 属性 | 类型 | 描述 |
|------|------|------|
| `currentPage` | `number` | 当前页码 |
| `setPage` | `(page: number) => void` | 设置页码的函数 |
| `currentPageSize` | `number` | 每页记录数 |
| `setPageSize` | `(pageSize: number) => void` | 设置页大小的函数 |
