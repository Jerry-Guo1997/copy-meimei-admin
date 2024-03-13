import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiTags } from '@nestjs/swagger';
import { ResImageCaptchaDto } from './dto/res-login.dto';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('登录')
@Controller('')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('captchaImage')
  @Public()
  async captchaImage(): Promise<ResImageCaptchaDto> {
    return await this.loginService.createImageCaptcha();
  }
}
