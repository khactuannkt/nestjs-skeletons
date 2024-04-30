import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Auth, AuthUser } from '../../../decorators';
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import GetMeDto from '../domains/dtos/profile-user.dto';
import { UserEntity } from '../domains/entities/user.entity';
import UserRegisterDto from '../domains/dtos/user-register.dto';

@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @Auth([])
  @ApiOkResponse({
    description: 'Successfully get my profile',
    type: GetMeDto,
  })
  getMyProfile(@AuthUser() user: UserEntity) {
    return new GetMeDto(user);
  }

  @Post('register')
  @ApiOkResponse({
    description: 'Successfully register',
    type: GetMeDto,
  })
  @ApiBody({type: UserRegisterDto})
  async register(@Body() userRegisterDto: UserRegisterDto){
    return this.userService.register(userRegisterDto);
  }
}
