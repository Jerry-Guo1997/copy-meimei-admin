import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from '../role/role.service';
import { SharedService } from 'src/shared/shared.service';
import { Dept } from './entities/dept.entities';
import { Repository } from 'typeorm';
import { ReqAddDeptDto } from './dto/req-dept.dto';

@Injectable()
export class DeptService {
  constructor(
    @InjectRepository(Dept) private readonly deptRepository: Repository<Dept>,
    @Inject(forwardRef(() => RoleService))
    private readonly roleService: RoleService,
    private readonly sharedService: SharedService,
  ) {}

  async addOrUpdate(reqAddDeptDto: ReqAddDeptDto) {
    if (reqAddDeptDto.parentId) {
      const parentDept = await this.findById(reqAddDeptDto.parentId);
      reqAddDeptDto.parent = parentDept;
    }
    await this.deptRepository.save(reqAddDeptDto);
  }

  async findById(deptId: number) {
    return this.deptRepository.findOneBy({ deptId });
  }
}
