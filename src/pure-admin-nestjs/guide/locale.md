# 国际化

::: info 说明
国际化使用 [nestjs-i18n](https://nestjs-i18n.com) 插件，目前集成了简体中文和英文两种语言包。
:::

## 目录结构

``` text
src/locales/
├── zh-CN/   # 简体中文包
└── en-US/   # 英文包
```

## 在控制器中使用

``` ts{7}
import { I18n, I18nContext } from 'nestjs-i18n'

@Controller('user')
export class WelcomeController {
  @Get()
  async getWelcome(@I18n() i18n: I18nContext) {
    return i18n.t('common.welcome')
  }
}
```

## 在服务中使用

``` ts{11}
import { I18nService } from 'nestjs-i18n'

@Injectable()
export class UserService {
  constructor(
    private readonly i18n: I18nService,
  ) {}

  async updatePassword(id: number, updateUserPasswordDto: UpdateUserPasswordDto) {
    if (!(await verifyPassword(oldPassword, user.password))) {
      throw new ForbiddenException({ message: this.i18n.t('common.oldPasswordError') })
    }
  }
}
```

## 在 `DTO` 文件中使用

``` ts{8,9,13,14}
import { Type } from 'class-transformer'
import { IsNumber, IsOptional, Min } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class PageDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: i18nValidationMessage('validation.invalid', { field: 'page' }) })
  @Min(1, { message: i18nValidationMessage('validation.min', { field: 'page', min: 1 }) })
  page?: number = 1

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: i18nValidationMessage('validation.invalid', { field: 'pageSize' }) })
  @Min(1, { message: i18nValidationMessage('validation.min', { field: 'pageSize', min: 1 }) })
  pageSize?: number = 10
}
```

## 使用当前上下文获取翻译

在一些场景中，可以使用当前上下文获取翻译：

``` ts
import { I18nContext } from 'nestjs-i18n'

function someFunction() {
  // 获取当前请求的I18nContext
  const i18n = I18nContext.current()
  return i18n.t('common.welcome')
}
```

## 带参数的翻译

``` json
// zh-CN/common.json
{
  "welcome": "欢迎您，{name}！"
}
```

``` ts
import { I18nService } from 'nestjs-i18n'

@Injectable()
export class UserService {
  constructor(
    private readonly i18n: I18nService,
  ) {}

  async welcome() {
    return this.i18n.t('common.welcome', { args: { name: '张三' } })
  }
}
```
