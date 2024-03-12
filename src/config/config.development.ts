import { defineConfig } from './defineConfig';

export default defineConfig({
  jwt: {
    secret: process.env.JWT_SECRET || '123456',
  },

  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST || '192.168.32.132',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'fufu',
    autoLoadModels: true,
    synchronize: true,
    logging: false,
  },

  redis: {
    config: {
      type: 'single',
      url: 'redis://:123456@192.168.32.132:6379/0',
    },
  },

  bullRedis: {
    host: '192.168.32.132',
    port: '6379',
    password: '123456',
  },

  uploadPath: '',

  isDemoEnvironment: false,
});
