import { User } from 'src/modules/system/user/entities/user.entity';

export class ResImageCaptchaDto {
  img: string;

  uuid: string;
}

export class ResLoginDto {
  token: string;
}
export class ResInfo {
  permissions: string[];

  roles: string[];

  user: User;
}
