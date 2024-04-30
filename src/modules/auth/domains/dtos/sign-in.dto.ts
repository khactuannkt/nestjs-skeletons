import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'email is not empty' })
  @IsEmail()
  @ApiProperty({ example: 'email@exmaple.com' })
  email: string;

  @IsNotEmpty({ message: 'password is not empty' })
  @IsString({ message: 'password must be a string' })
  @ApiProperty({ example: 'password' })
  password: string;
}
