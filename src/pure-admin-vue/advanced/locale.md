# 国际化

::: info 说明
国际化使用 [Vue I18n](https://vue-i18n.intlify.dev) 插件，目前集成了简体中文和英文两种语言包。
:::

## 目录结构

``` text
src/locales/
├── langs/
│   ├── zh-CN.json   # 简体中文包
│   └── en-US.json   # 英文包
└── index.ts       # 语言包配置文件
```

## 使用方式

在单文件组件中使用：

``` vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('common.projectName') }}
  </div>
</template>
```

在 ts 文件中使用：

``` ts
import { i18n } from '@/locales'

const projectName = i18n.global.t('common.projectName')
```

## 带参数的翻译

``` json
// zh-CN.json
{
  "welcome": "欢迎您，{name}！"
}
```

``` vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const username = ref('张三')
</script>

<template>
  <p>{{ t('welcome', { name: username }) }}</p>
</template>
```

## 修改国际化配置

在 `src/locales/index.ts` 中对 配置进行修改，具体 API 请查看 [Vue I18n](https://vue-i18n.intlify.dev) 文档。
