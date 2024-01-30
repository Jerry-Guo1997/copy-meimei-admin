import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello world');
    console.log('hello world1');
    console.log('hello world2');
    return this.appService.getHello();
  }
}
