# 国际化

::: info 说明
国际化使用 [react-i18next](https://react.i18next.com) 插件，目前集成了简体中文和英文两种语言包。
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

在 React 组件和 Hooks 中使用：

``` tsx
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
```

在 ts 文件中使用：

``` ts
import { i18n } from '@/locales'

const projectName = i18n.t('common.projectName')
```

## 带参数的翻译

``` json
// zh-CN.json
{
  "welcome": "欢迎您，{{name}}！"
}
```

``` tsx
import { useTranslation } from 'react-i18next'

export default function Hello () {
  const { t } = useI18n()

  return (
    <p>{t('welcome', { name: username })}</p>
  )
}
```

## 修改国际化配置

在 `src/locales/index.ts` 中对 配置进行修改，具体 API 请查看 [react-i18next](https://react.i18next.com) 文档。
