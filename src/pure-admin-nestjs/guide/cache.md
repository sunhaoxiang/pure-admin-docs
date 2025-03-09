# 缓存

::: tip 说明
项目缓存功能基于 [ioredis](https://github.com/redis/ioredis) 进行封装。
:::

## 为路由添加缓存

使用方式：

``` ts{8-10}
import { UseInterceptors } from '@nestjs/common'
import { CacheKey, CacheTTL } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'

@Controller('user')
export class UserController {
  @Get()
  @CacheKey('user:list')
  @CacheTTL(3600)
  @UseInterceptors(CacheInterceptor)
  async list(@Query() userListDto: UserListDto) {}
}
```
 
`CacheKey` 装饰器用于自定义缓存的键名。

`CacheTTL` 装饰器用于设置缓存的生存时间，以 `秒` 为单位。


## 使缓存失效

``` ts{8-9,13-14}
import { UseInterceptors } from '@nestjs/common'
import { CacheInvalidate } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'

@Controller('user')
export class UserController {
  @Post()
  @CacheInvalidate('user:list')
  @UseInterceptors(CacheInterceptor)
  async create(@Body() createUserDto: CreateUserDto) {}

  @Put(':id')
  @CacheInvalidate(['user:list', 'user:all'])
  @UseInterceptors(CacheInterceptor)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {}
}
```

`CacheInvalidate` 装饰器用于使传入键名的缓存失效，传参可以是 `string` 和 `string[]` 类型。

## 基于用户的缓存

有时候，虽然接口名与传递的参数一样，但是每个用户获取到的数据是不同的，我们可以使用 `CacheUserKey` 装饰器，给每个用户都生成不同的缓存：

``` ts{8-10}
import { UseInterceptors } from '@nestjs/common'
import { CacheKey, CacheTTL } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'

@Controller('user')
export class UserController {
  @Get('info')
  @CacheUserKey('user:info')
  @CacheTTL(3600)
  @UseInterceptors(CacheInterceptor)
  async info(@UserInfo() jwtUserData: JwtUserData) {
    return this.userService.getUserInfo(jwtUserData)
  }
}
```

使用 `CacheInvalidateUser` 装饰器来使基于用户的缓存失效

``` ts{8-10}
import { UseInterceptors } from '@nestjs/common'
import { CacheKey, CacheTTL } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'

@Controller('user')
export class UserController {
 @Put(':id')
  @CacheInvalidateUser('user:info', req => req.params.id)
  @UseInterceptors(CacheInterceptor)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {}
}
```

`CacheInvalidateUser` 的第二个参数中，`req` 为当前路由的 request 对象，返回值是需要失效的用户 id。

## 其他用法

有时候，装饰器并不能满足我们的需求；或者我们需要在 service 或其他地方进行缓存，这时可以将 `CacheService` 注入，然后自行处理相关逻辑：

``` ts
import { CacheService } from '@/modules/cache/cache.service'

@Injectable()
export class UserService {
  constructor(
    private readonly cache: CacheService,
  ) {}
}
```


