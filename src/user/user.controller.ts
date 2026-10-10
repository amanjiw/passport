import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { userService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: userService) {}

  @Get()
  async find() {
    return {
      data: await this.userService.find(),
    };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'user created successfully.',
      data: await this.userService.create(createUserDto),
    };
  }
}
