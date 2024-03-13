import { Injectable } from '@nestjs/common';

import { InjectRedis } from '@nestjs-modules/ioredis';
import { SharedService } from 'src/shared/shared.service';
import Redis from 'ioredis';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../system/user/user.service';
import { MenuService } from '../system/menu/menu.service';
import { LogService } from '../monitor/log/log.service';
import { ConfigService } from '@nestjs/config';
import * as svgCaptcha from 'svg-captcha';
import { CAPTCHA_IMG_KEY } from 'src/common/contants/redis.contant';

@Injectable()
export class LoginService {
  constructor(
    private readonly sharedService: SharedService,
    @InjectRedis() private readonly redis: Redis,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly menuService: MenuService,
    private readonly logService: LogService,
    private readonly configService: ConfigService,
  ) {}

  async createImageCaptcha() {
    const { data, text } = svgCaptcha.createMathExpr({
      size: 4,
      ignoreChars: '0o1i',
      noise: 3,
      color: true,
      background: '#ffffff',
      width: 115.5,
      height: 40,
    });
    const result = {
      img: data.toString(),
      uuid: this.sharedService.generateUUID(),
    };
    await this.redis.set(
      `${CAPTCHA_IMG_KEY}:${result.uuid}`,
      text,
      'EX',
      60 * 5,
    );
    return result;
  }
}
