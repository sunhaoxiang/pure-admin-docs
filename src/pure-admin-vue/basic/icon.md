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
  // icon 参数传入搜索到的图标名
  <Icon icon="icon-park-outline:user" />
</template>
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
