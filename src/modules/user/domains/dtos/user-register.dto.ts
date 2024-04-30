import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE, UserRoleType } from '../../../../constants/user-role';
import { IsArray, IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export default class UserRegisterDto {
  @IsNotEmpty({ message: 'alias is not empty' })
  @IsString({ message: 'alias must be a string' })
  @ApiProperty({
    type: String,
    example: 'tuan.nk',
  })
  alias: string;

  @ApiProperty({
    type: String,
    example: 'tuan.nk@example.com',
  })
  @IsNotEmpty({ message: 'email is not empty' })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    example: '123456',
  })
  @IsString({ message: 'password must be a string' })
  password: string;

  @ApiProperty({
    type: [String],
    example: Object.values(USER_ROLE),
  })
  @IsArray()
  roles: UserRoleType[];

  @ApiProperty({
    type: String,
    example: 'Khac Tuan',
  })
  @IsString({ message: 'name must be a string' })
  name: string | null;

  @ApiProperty({
    type: String,
    example: null,
  })
  avatar: string | null;
}
