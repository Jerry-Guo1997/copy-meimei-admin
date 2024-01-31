import { Logger } from '@nestjs/common';

// 判断系统是否是开发环境
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}
// 根据环境变量判断使用配置
export default () => {
  let envConfig: IConfig = {};
  try {
    envConfig = require(`./config.${process.env.NODE_ENV}`).default;

    process.env.uploadPath = envConfig.uploadPath ?? '/upload';
  } catch (e) {
    const logger = new Logger('ConfigModule');
    logger.error(e);
  }

  return envConfig;
};

export interface IConfig {
  jwt?: {
    secret: string;
  };

  uploadPath?: string;

  database?: {
    type?: string;
    host?: string;
    port?: number | string;
    username?: string;
    password?: string;
    database?: string;
    autoLoadModels: boolean;
    synchronize?: boolean;
    logging?: any;
  };

  redis?: {
    config: {
      url: string;
    };
  };

  bullRedis?: {
    host: string;
    port: string;
    password: string;
  };

  isDemoEnvironment?: boolean;
}
