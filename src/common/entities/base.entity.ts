import { ApiHideProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({ name: 'create_time', comment: '创建时间' })
  @ApiHideProperty()
  //   @Excel({
  //     name: '创建时间',
  //     type: ExcelTypeEnum.EXPORT,
  //     dateFormat: 'YYYY-MM-DD HH:mm:ss',
  //     sort: 100,
  //   })
  createTime: Date | string;

  @UpdateDateColumn({ name: 'update_time', comment: '更新时间' })
  @ApiHideProperty()
  updateTime: Date | string;

  @Column({ name: 'update_by', comment: '更新人', length: 30, default: '' })
  @ApiHideProperty()
  createBy: string;

  @Column({ name: 'update_by', comment: '更新人', length: 30, default: '' })
  @ApiHideProperty()
  updateBy: string;

  @Column({ name: 'remark', comment: '备注', default: '' })
  @IsOptional()
  @IsString()
  remark?: string;

  @VersionColumn({ name: 'version', comment: '版本号', select: false })
  @ApiHideProperty()
  version?: number;
}
