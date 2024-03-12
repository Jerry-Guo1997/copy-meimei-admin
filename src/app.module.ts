import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    // 配置文件模块
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // 公共模块
    SharedModule,

    // 业务模块
  ],

  //providers: [...alias]
})
export class AppModule {}
