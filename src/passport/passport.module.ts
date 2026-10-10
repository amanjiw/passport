import { Module } from '@nestjs/common';
import { PassportController } from './passport.controller';
import { PassportService } from './passport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportEntity } from './entities/passport.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PassportEntity, UserEntity])],
  controllers: [PassportController],
  providers: [PassportService],
})
export class PassportModule {}
