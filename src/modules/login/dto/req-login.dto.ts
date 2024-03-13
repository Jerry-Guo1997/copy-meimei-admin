import { IsString } from 'class-validator';

export class ReqLoginDto {
  @IsString()
  uuid: string;

  @IsString()
  code: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
