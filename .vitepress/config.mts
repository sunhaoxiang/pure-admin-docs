import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pure Admin",
  description: "简洁优雅的管理系统",
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '文档',
        items: [
          {
            text: 'Pure Admin React',
            link: '/pure-admin-react/intro',
          },
          {
            text: 'Pure Admin Vue',
            link: '/pure-admin-vue/intro',
          },
          {
            text: 'Pure Admin NestJS',
            link: '/pure-admin-nestjs/intro',
          },
        ],
      },
      {
        text: '演示',
        items: [
          { text: 'Pure Admin React', link: '/pure-admin-react/intro' },
          { text: 'Pure Admin Vue', link: '/pure-admin-vue/intro' },
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/pure-admin-react/': [
        {
          text: 'Pure Admin React',
          items: [
            { text: '简介', link: '/pure-admin-react/intro' },
            { text: '快速上手', link: '/pure-admin-react/quick-start' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '组件库', link: '/pure-admin-react/basic/components' },
            { text: '环境变量', link: '/pure-admin-react/basic/env' },
            { text: '路由', link: '/pure-admin-react/basic/router' },
            { text: '布局', link: '/pure-admin-react/basic/layout' },
            { text: '图标', link: '/pure-admin-react/basic/icon' },
            { text: '网络请求', link: '/pure-admin-react/basic/request' },
            { text: '构建部署', link: '/pure-admin-react/basic/build' },
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '国际化', link: '/pure-admin-react/advanced/locale' },
            { text: '权限', link: '/pure-admin-react/advanced/permission' },
            { text: '数据表格', link: '/pure-admin-react/advanced/data-table' },
          ]
        },
        {
          text: 'Hooks 函数',
          items: [
            { text: 'useTable', link: '/pure-admin-react/hooks/use-table' },
            { text: 'useSearchTableContainer', link: '/pure-admin-react/hooks/use-search-table-container' },
            { text: 'useForm', link: '/pure-admin-react/hooks/use-form' },
            { text: 'usePageTransfer', link: '/pure-admin-react/hooks/use-page-transfer' },
            { text: 'useLoading', link: '/pure-admin-react/hooks/use-loading' },
          ]
        }
      ],
      '/pure-admin-vue/': [
        {
          text: 'Pure Admin Vue',
          items: [
            { text: '简介', link: '/pure-admin-vue/intro' },
            { text: '快速上手', link: '/pure-admin-vue/quick-start' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '组件库', link: '/pure-admin-vue/basic/components' },
            { text: '环境变量', link: '/pure-admin-vue/basic/env' },
            { text: '路由', link: '/pure-admin-vue/basic/router' },
            { text: '布局', link: '/pure-admin-vue/basic/layout' },
            { text: '图标', link: '/pure-admin-vue/basic/icon' },
            { text: '网络请求', link: '/pure-admin-vue/basic/request' },
            { text: '构建部署', link: '/pure-admin-vue/basic/build' },
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '国际化', link: '/pure-admin-vue/advanced/locale' },
            { text: '权限', link: '/pure-admin-vue/advanced/permission' },
            { text: '数据表格', link: '/pure-admin-vue/advanced/data-table' },
          ]
        },
        {
          text: 'Hooks 函数',
          items: [
            { text: 'useTable', link: '/pure-admin-vue/hooks/use-table' },
            { text: 'useSearchTableContainer', link: '/pure-admin-vue/hooks/use-search-table-container' },
            { text: 'useForm', link: '/pure-admin-vue/hooks/use-form' },
            { text: 'usePageTransfer', link: '/pure-admin-vue/hooks/use-page-transfer' },
            { text: 'useLoading', link: '/pure-admin-vue/hooks/use-loading' },
          ]
        }
      ],
      '/pure-admin-nestjs/': [
        {
          text: 'Pure Admin NestJS',
          items: [
            { text: '简介', link: '/pure-admin-nestjs/intro' },
            { text: '快速上手', link: '/pure-admin-nestjs/quick-start' }
          ]
        },
        {
          text: '教程',
          items: [
            { text: '框架', link: '/pure-admin-nestjs/guide/framework' },
            { text: '环境变量', link: '/pure-admin-nestjs/guide/env' },
            { text: '数据初始化', link: '/pure-admin-nestjs/guide/init-data' },
            { text: '权限', link: '/pure-admin-nestjs/guide/permission' },
            { text: '缓存', link: '/pure-admin-nestjs/guide/cache' },
            { text: '国际化', link: '/pure-admin-nestjs/guide/locale' },
            { text: '日志', link: '/pure-admin-nestjs/guide/log' },
            { text: '构建部署', link: '/pure-admin-nestjs/guide/build' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunhaoxiang' }
    ]
  }
})
