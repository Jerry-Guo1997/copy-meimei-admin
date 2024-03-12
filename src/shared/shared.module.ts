import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';
import { BullModule } from '@nestjs/bull';
import { SharedService } from './shared.service';

@Global()
@Module({
  imports: [
    // 连接mysql数据库
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        type: configService.get<any>('database.type'),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        autoLoadModels: configService.get<boolean>('database.autoLoadModels'),
        synchronize: configService.get<boolean>('database.synchronize'),
        logging: configService.get('database.logging'),
      }),
      inject: [ConfigService],
    }),

    // 连接redis
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get<any>('redis.config'),
      inject: [ConfigService],
    }),

    // 启用队列
    BullModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('bullRedis.host'),
          port: configService.get<number>('bullRedis.port'),
          password: configService.get<string>('bullRedis.password'),
        },
      }),
      inject: [ConfigService],
    }),

    // LogModule,
  ],
  controllers: [],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
