import { Controller, Body, Post } from '@nestjs/common';
import { CreateMemberBody } from './dtos/create-member-body';
import { MembersRepository } from './repositories/members-repository';

// decorator
@Controller('app')
export class AppController {
  constructor(
    private MembersRepository: MembersRepository,
  ) { }

  @Post('members')
  async getHello(@Body() body: CreateMemberBody) {
    const { name, 'function': memberFunction } = body

    await this.MembersRepository.create(name, memberFunction)

  }
}