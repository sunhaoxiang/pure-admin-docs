# 初始数据

## 配置初始数据

在 `prisma/seed.ts` 文件中，可以配置项目初始化时需要生成的数据：

``` ts
const SUPER_ADMIN_USERNAME = 'pure-admin'
const SUPER_ADMIN_PASSWORD = '123456'
const SUPER_ADMIN_EMAIL = 'admin@pure-admin.com'
const SUPER_ADMIN_NICKNAME = 'admin'
const SUPER_ADMIN_PHONE = '13333333333'

async function main() {
  // 可以将不需要创建的内容注释掉

  // 创建超级管理员账号
  await createSuperAdmin()

  // 创建首页菜单数据
  await createHomeMenu()
  // 创建组件示例菜单数据
  await createExampleMenu()
  // 创建异常页菜单数据
  await createExceptionMenu()
  // 创建多级菜单数据
  await createMultiMenu()
  // 创建系统菜单数据
  await createSystemMenu()
  // 创建关于菜单数据
  await createAboutMenu()
}
```

将不需要初始化的数据注释掉，或者修改数据的详细内容后，再进行创建。
