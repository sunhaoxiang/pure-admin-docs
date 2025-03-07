# 权限

权限控制采用后端控制模式，通过后端返回的用户权限数据进行统一管理。系统支持对菜单、路由和页面功能等资源进行精细化的权限控制，确保安全性和可维护性。

## 菜单权限

在 `src/router/routeMeta.ts` 文件中，为 `meta` 中添加 `{ permission: 'your-permission-code' }` ，可以为页面添加权限代码，在 `菜单管理` 模块中为相关路由添加同样的权限代码，在 `角色管理` 模块中，为角色赋予相关菜单权限 。

``` ts
const routeMetaConfig = [
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

## 功能权限

在 `菜单管理` 模块中为创建好的页面添加功能权限，在 `角色管理` 模块中，为角色赋予相关功能权限。使用 `Permission` 组件，为页面相关功能添加权限代码：

```  vue
<script setup lang="ts">
import { Permission } from '@/components/permission'
</script>

<template>
  <Permission permission="system:user:create" >
    <your-permission-component />
  </Permission>

  // permission 可以传入数组
  // matchMode 有两种模式：全部满足('all')，或满足其一('any')
  <Permission
    :permission="['system:user:create', 'system:user:create']"
    matchMode="all"
  >
    <your-permission-component />
  </Permission>

</template>
```

## 接口权限

在 `接口管理` 模块中为相关接口添加权限代码，在 `角色管理` 模块中，为角色赋予相关接口权限即可，具体权限判断由后端进行。
