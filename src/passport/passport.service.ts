import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportEntity } from './entities/passport.entity';
import { Repository } from 'typeorm';
import { CreatePassportDto } from './dto/passport.dto';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class PassportService {
  constructor(
    @InjectRepository(PassportEntity)
    private pasportRepository: Repository<PassportEntity>,

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create = async (createPassportDto: CreatePassportDto) => {
    const data: CreatePassportDto = {
      country: createPassportDto.country,
      passportNumber: createPassportDto.passportNumber,
      userId: createPassportDto.userId,
    };

    const user = await this.userRepository.findOneBy({ id: data.userId });

    if (!user) throw new NotFoundException('کاربر یافت نشد');

    const newPassport = this.pasportRepository.create(data);

    return await this.pasportRepository.save(newPassport);
  };

  find = async () => {
    return this.pasportRepository.find({});
  };
}
