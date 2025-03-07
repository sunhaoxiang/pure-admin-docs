# 数据表格

本项目封装了一套实现了增删改查功能的数据表格，在创建文件时，需要遵守以下规范：

``` text
src/pages/
└── user/
    ├── index.vue // 列表页面
    └──[mode]/
       └── [id].vue // 新增修改页面
```

在列表页，使用 `useSearchTableContainer` hook 进行布局设置，使用 `useTable` hook 进行逻辑处理。在表单页，使用 `useForm` hook 进行逻辑处理。

具体内容可参考 `src/system` 模块中的相关代码。
