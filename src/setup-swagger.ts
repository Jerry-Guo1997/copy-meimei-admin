import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('FUFU')
    .setDescription('API 文档')
    .setTermsOfService('https://docs.nestjs.cn/8/introduction')
    .setLicense('MIT', 'https://www.baidu.com')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`api`, app, document);
}
