import { Injectable } from '@nestjs/common';
import { Unauthorized } from '../../../exceptions/unauthorized.exception';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../domains/dtos/sign-in.dto';
import { validateHash } from '../../../common/utils';
import { AuthResponseDto } from '../domains/dtos/auth-response-dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.getCredentialUserByEmail(
      loginDto.email,
    );
    if (!user) {
      throw new Unauthorized('Wrong email or password');
    }
    const comparePassword = await validateHash(
      loginDto.password,
      user.password,
    );
    if (!comparePassword) {
      throw new Unauthorized('Wrong email or password');
    }
    const payload = { id: user.id, email: user.email, roles: user.roles };
    const token = await this.jwtService.signAsync(payload);
    return new AuthResponseDto(token);
  }
}
