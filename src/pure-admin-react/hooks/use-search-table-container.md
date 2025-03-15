# useSearchTableContainer

## 概述

`useSearchTableContainer` 需要和 `useTable` Hook 、 `SearchTableContainer` 组件配合使用， 用于自动计算和优化带有搜索表单和表格的布局。它主要解决了在响应式布局中表格高度自适应的问题，确保表格在任何屏幕尺寸下都能有最佳的显示效果。这个 Hook 会自动监听页面元素变化，计算搜索区域和表格区域的高度，并返回最佳的表格滚动高度，避免了在不同屏幕尺寸和内容高度下手动调整表格滚动区域的麻烦。

## 返回值

| 属性/方法 | 类型 | 描述 |
|-----------|------|------|
| `listContainerProps` | `{ searchCardRef: RefObject<HTMLDivElement>; searchCardHeight: number; tableCardHeight: number; }` | 列表容器属性对象，包含搜索卡片引用、搜索卡片高度和表格卡片高度 |
| `tableScrollY` | `number \| undefined` | 表格垂直滚动高度，当表格内容超出可视区域时启用滚动 |
