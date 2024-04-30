import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE, UserRoleType } from '../../../../constants/user-role';
import { UserEntity } from '../entities/user.entity';

export default class UserResponseDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    example: 'tuan.nk',
  })
  alias: string;

  @ApiProperty({
    type: String,
    example: 'tuan.nk@example.com',
  })
  email: string;

  @ApiProperty({
    type: [String],
    example: Object.values(USER_ROLE),
  })
  roles: UserRoleType[];

  @ApiProperty({
    type: String,
    example: 'Khac Tuan',
  })
  name: string | null;

  @ApiProperty({
    type: String,
    example: null,
  })
  avatar: string | null;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.alias = user.alias;
    this.name = user.name;
    this.email = user.email;
    this.roles = user.roles;
    this.avatar = user.avatar;
  }
}
export class UsersResponseDto {
  @ApiProperty()
  members: UserResponseDto[];

  constructor(members: UserResponseDto[]) {
    this.members = members.map(
      (member: UserEntity) => new UserResponseDto(member),
    );
  }
}
