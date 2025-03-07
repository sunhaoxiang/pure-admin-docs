# useSearchTableContainer

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `listContainerProps` | `ComputedRef<{ searchCardRef: Ref<HTMLElement>; searchCardHeight: Ref<number>; tableCardHeight: ComputedRef<number>; }>` | 列表容器属性对象，包含搜索卡片引用、搜索卡片高度和表格卡片高度 |
| `tableScrollY` | `ComputedRef<number \| undefined>` | 表格垂直滚动高度，当表格内容超出可视区域时启用滚动 |
