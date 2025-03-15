# 布局

## 布局类型

### 默认布局

默认布局包含完整的应用程序界面结构：

- **侧边栏** (Sider)
- **页面头部** (Header)
- **内容区域** (Content)

``` vue
<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <Content>
        <slot />
      </Content>
    </a-layout>
  </a-layout>
</template>
```

### 空白布局

空白布局提供一个简洁的容器，适用于登录页、错误页等特殊页面：

``` vue
<template>
  <div class="bg-theme-layout dark:bg-theme-layout-dark dark:text-theme-dark text-theme">
    <slot />
  </div>
</template>
```

## 路由配置方法

在 `src/router/routeMeta.ts` 文件中， 通过 `meta.layout` 属性指定页面使用的布局类型：

``` ts
const routeMetaConfig: Route[] = [
  {
    name: '登录',
    path: '/login',
    meta: {
      public: true,
      // 使用空白布局
      layout: 'blank'
    } 
  },
  {
    name: '用户管理',
    path: '/system/user',
    meta: {
      // 默认布局可以不设置或明确指定
      layout: 'default'
    } 
  },
]
```

如果不设置布局，则自动指定 `默认布局` 。

## 扩展布局系统

1. 创建新的布局组件，例如 `AdminLayout.vue` ：

``` vue
<template>
  <a-layout>
    <Header />
    <a-layout>
      <Sider />
      <Content>
        <slot />
      </Content>
    </a-layout>
    <Footer />
  </a-layout>
</template>
```

2. 在 `src/layouts/Layout.vue` 组件中添加条件判断：

``` vue
<template>
  <DefaultLayout v-if="!route.meta?.layout || route.meta.layout === 'default'">
    <!-- 默认布局内容 -->
  </DefaultLayout>
  <AdminLayout v-else-if="route.meta.layout === 'admin'">
    <!-- 管理员布局内容 -->
  </AdminLayout>
  <BlankLayout v-else>
    <!-- 空白布局内容 -->
  </BlankLayout>
</template>
```

3. 在 `src/router/routeMeta.ts` 中配置新布局：

``` ts
{
  name: '管理员',
  path: '/admin/dashboard',
  meta: { layout: 'admin' }
}
```
