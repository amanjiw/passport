import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create = async (createuserDto: CreateUserDto) => {
    const data: CreateUserDto = {
      name: createuserDto.name,
      email: createuserDto.email,
    };

    const newUser = this.userRepository.create(data);

    return await this.userRepository.save(newUser);
  };

  find = async () => {
    const users = await this.userRepository.find({});

    return users;
  };
}
