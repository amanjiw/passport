import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  @IsEmail({}, { message: 'ایمیل باید درست باشد.' })
  email!: string;
}
