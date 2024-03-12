import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeptService } from './dept.service';
import { User } from '../user/entities/user.entity';
import { ReqAddDeptDto } from './dto/req-dept.dto';

@ApiTags('部门管理')
@Controller('system/dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}

  /* 新增部门 */
  @RepeatSubmit()
  @Post()
  @RequiresPermissions('system:dept:add')
  @Logger({
    title: '部门管理',
    businessType: BusinessTypeEnum.insert,
  })
  async add(
    @Body() reqAddDeptDto: ReqAddDeptDto,
    @User(UserEnum.userName, UserInfoPipe) userName: string,
  ) {
    reqAddDeptDto.createBy = reqAddDeptDto.updateBy = userName;
    await this.deptService.addOrUpdate(reqAddDeptDto);
  }
}
