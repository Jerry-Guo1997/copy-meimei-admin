import { OmitType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Dept } from '../entities/dept.entities';

export class ReqDeptListDto {
  @IsOptional()
  @IsString()
  deptName?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

export class ReqAddDeptDto extends OmitType(Dept, ['deptId'] as const) {
  @Type()
  @IsNumber()
  parentId: number;
}

export class ReqUpdateDept extends Dept {
  @Type()
  @IsNumber()
  parentId: number;
}
