import { Body, Controller, Get, Post } from '@nestjs/common';
import { PassportService } from './passport.service';
import { CreatePassportDto } from './dto/passport.dto';

@Controller('passports')
export class PassportController {
  constructor(private passportService: PassportService) {}

  @Post()
  async create(@Body() createPassportDto: CreatePassportDto) {
    return {
      message: 'OK',
      data: await this.passportService.create(createPassportDto),
    };
  }

  @Get()
  async find() {
    return {
      data: await this.passportService.find(),
    };
  }
}
