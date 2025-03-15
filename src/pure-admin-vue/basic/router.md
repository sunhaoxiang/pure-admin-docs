# 路由

::: info 说明
项目路由基于插件 [Unplugin Vue Router](https://uvr.esm.is)，详细用法请查看插件文档。
:::

## 基于文件的路由系统

项目会根据 pages 目录下的文件结构自动生成路由。以下是一些基本规则：

| 文件路径 | 生成的路由路径 |
| --- | --- |
| `src/pages/index.vue` | `/` |
| `src/pages/about.vue` | `/about` |
| `src/pages/users/index.vue` | `/users` |
| `src/pages/users/[id].vue` | `/users/:id` |
| `src/pages/settings/profile.vue` | `/settings/profile` |

## 嵌套路由

当同时创建 `src/pages/users/index.vue` 和 `src/pages/users.vue` 两个文件时，会自动创建嵌套路由结构，可以用于实现布局嵌套和页面组织。

``` text
src/pages/
├── user.vue
└── user/
    └── index.vue
```

将生成以下路由结构：

``` ts
const routes = [
  {
    path: '/user',
    component: () => import('src/pages/user.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/user/index.vue')
      },
    ],
  },
]
```

如果去掉 `src/pages/users.vue`，将会生成以下路由结构：

``` ts
const routes = [
  {
    path: '/user',
    // 注意这里没有组件
    children: [
      {
        path: '',
        component: () => import('src/pages/user/index.vue')
      },
    ],
  },
]
```

## 路由元信息

本项目中，路由元信息统一在 `src/router/routeMeta.ts` 文件中添加。

``` ts
const routeMetaConfig = [
  { name: '登录', path: '/login', meta: { public: true } },
  {
    name: '系统设置',
    children: [
      { name: '用户管理', path: '/system/user', meta: { permission: USER.READ } },
      { name: '角色管理', path: '/system/role', meta: { permission: ROLE.READ } },
      { name: '菜单管理', path: '/system/menu', meta: { permission: MENU.READ } },
    ],
  },
]
```

配置 `meta.public` 为 `true` ，可以让页面无需登录即可访问。

配置 `meta.permission` ，可以为页面添加权限代码，同时在项目中 `用户管理` 、 `角色管理` 模块中为用户添加相应的访问权限。

## 路由守卫

在 `src/router/index.ts` 中设置全局路由守卫：

``` ts
router.beforeEach(async (to, from, next) => {
  // 在这里添加你的逻辑
}

router.afterEach(async (to, from, failure) => {
  // 在这里添加你的逻辑
}
```
