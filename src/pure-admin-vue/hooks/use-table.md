# useTable

## API 参考

| 参数 | 类型 | 必填 | 默认值 | 描述 |
|------|------|------|-------|------|
| `listApiFn` | `(params: any) => Promise<ApiResponse<any>>` | 是 | - | 获取列表数据的 API 函数 |
| `deleteApiFn` | `(id: number) => Promise<void>` | 否 | - | 删除单条数据的 API 函数 |
| `batchDeleteApiFn` | `(ids: number[]) => Promise<void>` | 否 | - | 批量删除数据的 API 函数 |
| `key` | `string` | 是 | - | 唯一标识符，用于缓存管理 |
| `idKey` | `string` | 否 | `'id'` | 数据记录的唯一 ID 字段名 |
| `cacheEnabled` | `boolean` | 否 | `true` | 是否启用数据缓存 |
| `dataStaleTime` | `number` | 否 | `600000` | 数据过期时间（毫秒），默认 10 分钟 |
| `pagination` | `boolean` | 否 | `true` | 是否启用分页 |
| `selectable` | `boolean` | 否 | `false` | 是否支持行选择 |
| `form` | `Record<string, any>` | 否 | `{}` | 表单初始值 |
| `rules` | `FormProps['rules']` | 否 | `{}` | 表单验证规则 |
| `columns` | `Ref<TableProps['columns']> \| TableProps['columns']` | 是 | - | 表格列定义 |
| `scrollX` | `string` | 否 | `'100%'` | 表格横向滚动宽度 |
| `scrollY` | `Ref<number \| undefined> \| number \| undefined` | 否 | `undefined` | 表格纵向滚动高度 |
| `pageCreatePath` | `string` | 否 | - | 创建页面路径，默认为 `${route.path}/create/new` |
| `pageEditPath` | `string` | 否 | - | 编辑页面路径，默认为 `${route.path}/edit/:id` |

## 返回值

### 表单相关

| 属性 | 类型 | 描述 |
|------|------|------|
| `formRef` | `Ref` | 表单引用，可用于表单方法调用 |
| `formState` | `Ref<Record<string, any>>` | 表单状态数据 |
| `formRules` | `FormProps['rules']` | 表单验证规则 |

### 表格相关

| 属性 | 类型 | 描述 |
|------|------|------|
| `tableProps` | `Computed<TableProps>` | 表格属性，可直接绑定到 `<a-table>` 组件 |

### 状态指示器

| 属性 | 类型 | 描述 |
|------|------|------|
| `isLoading` | `Ref<boolean>` | 是否正在加载数据 |
| `isDeleting` | `Ref<boolean>` | 是否正在删除单条数据 |
| `isBatchDeleting` | `Ref<boolean>` | 是否正在批量删除数据 |

### 数据

| 属性 | 类型 | 描述 |
|------|------|------|
| `data` | `Ref<ApiResponse<any> \| undefined>` | 原始 API 响应数据 |
| `list` | `Computed<any[]>` | 处理后的数据列表 |
| `total` | `Computed<number>` | 数据总数 |

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
| `selectedState` | `Ref<number[]>` | 当前选中行的 ID 数组 |
| `selectedCount` | `Computed<number>` | 当前选中行的数量 |
| `selectedIsEmpty` | `Computed<boolean>` | 是否没有选中任何行 |
| `setSelectedState` | `(keys: number[]) => void` | 设置选中行 |
| `resetSelectedState` | `() => void` | 重置选中行 |

### 缓存管理

| 方法 | 类型 | 描述 |
|------|------|------|
| `clearSavedState` | `() => void` | 清除缓存的查询状态 |

### 分页相关（当 `pagination` 为 `true` 时可用）

| 属性 | 类型 | 描述 |
|------|------|------|
| `currentPage` | `Ref<number>` | 当前页码 |
| `currentPageSize` | `Ref<number>` | 每页记录数 |
