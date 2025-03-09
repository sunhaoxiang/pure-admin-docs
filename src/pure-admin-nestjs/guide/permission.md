# 权限

## 公开路由

有些路由需要不传递 accessToken 就能访问，可以使用 `Public`  装饰器：

``` ts{5}
import { Public } from '@/decorators'

@Controller('user')
export class UserController {
  @Public()
  @Post('login')
  async login() {}
}
```

没有添加 `Public` 的路由，都需要传递正确的 accessToken 才能访问。

## 访问权限设置

使用 `Permissions` 装饰器来为接口路由添加访问权限 code：

``` ts{6,10}
import { Permissions } from '@/decorators'

@Controller('user')
export class UserController {
  @Get()
  @Permissions('system:user:read')
  async list(@Query() userListDto: UserListDto) {}

  @Post()
  @Permissions(['system:user:create'])
  async create(@Body() createUserDto: CreateUserDto) {}
}
```

如果 `Permissions` 传入的参数类型为 `String[]`，那么该路由需要访问用户满足所传入的所有权限才能访问。

在为路由添加完权限代码后，在项目 `接口管理` 模块中为相关接口添加权限代码，然后在 `角色管理` 模块中，为角色赋予相关权限即可。
