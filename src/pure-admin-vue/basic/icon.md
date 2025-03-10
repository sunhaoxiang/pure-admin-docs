# 图标

::: info 说明
项目图标使用 [Iconify](https://iconify.design)，提供 150+ 套图标集，有 200,000+ 个图标可以免费使用。
:::

## 使用图标
你可以在 [Iconify](https://icon-sets.iconify.design/) 上搜索需要的图标，然后按照以下方式在项目中使用：

``` vue
<script setup lang="ts">
import { Icon } from '@/components/icon'
</script>

<template>
  <!-- icon 参数传入搜索到的图标名 -->
  <Icon icon="icon-park-outline:user" />

  <!-- 设置图标大小 -->
  <Icon icon="icon-park-outline:user" width="24" height="24" />
  
  <!-- 使用 CSS 单位 -->
  <Icon icon="icon-park-outline:user" width="1.5rem" />
  
  <!-- 只设置一个尺寸，保持宽高比 -->
  <Icon icon="icon-park-outline:user" height="2em" />
  
  <!-- 设置图标颜色 -->
  <Icon icon="icon-park-outline:user" color="red" />
  
  <!-- 旋转和翻转 -->
  <Icon icon="mdi:arrow-right" :rotate="90" />
  <Icon icon="mdi:arrow-right" flip="horizontal" />
  
  <!-- 使用 CSS 类 -->
  <Icon icon="icon-park-outline:user" class="my-icon" />
</template>
```

## 创建动画图标

``` vue
<script setup lang="ts">
import { Icon } from '@/components/icon'
</script>

<template>
  <Icon icon="icon-park-outline:loading" class="spin-icon" />
</template>

<style>
.spin-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
```

## 图标加载方式
图标默认通过网络请求进行加载，如果你想要增强用户体验，让图标在页面加载完就立即显示，或在内网环境中使用，可以将部分图标进行预加载，以 `icon-park-outline` 这套图标为例：

```bash
pnpm add @iconify-json/icon-park-outline
```

在 `src/plugins/iconify.ts` 中进行添加：

``` ts
import iconParkOutline from '@iconify-json/icon-park-outline/icons.json'
import { addCollection } from '@iconify/vue'

export function setupIconifyOffline() {
  // 预加载图标
  addCollection(iconParkOutline)
}
```

本项目已默认将 `icon-park-outline` 预加载。

## 加载方式对比

| 加载方式 | 优点 | 缺点 | 推荐场景 |
| --- | --- | --- | --- |
| 网络加载 | 按需加载，不增加项目体积 | 首次加载需请求 API | 图标种类多且分散 |
| 预加载 | 立即显示，无需额外请求 | 增加项目体积 | 关键 UI 图标、离线应用 |

## 本地 svg 图标

将 svg 文件直接存放在 `src/assets/svg-icon` 中，即可直接使用图标。

``` text
src/assets/svg-icon
└── logo.svg
```

使用方式：
``` vue
<script setup lang="ts">
import { Icon } from '@/components/icon'
</script>

<template>
  // icon 名称为 icon-local:文件名
  <Icon icon="icon-local:logo" />
</template>
```
