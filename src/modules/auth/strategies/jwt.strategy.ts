import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ApiConfigService } from '../../../shared/services/api-config.service';
import { UserService } from '../../user/services/user.service';
import { Unauthorized } from '../../../exceptions';
import { TokenExtractPayloadType } from '../domains/types/token-extract-payload';

/**
 * Extract and check for JSON Web Token. Return Unauthorized if token is invalid.
 * Otherwise, extract payload from token and assign it to request.user
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private apiConfigService: ApiConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: apiConfigService.authConfig.secret,
    });
  }

  async validate(payload: TokenExtractPayloadType) {
    const user = await this.userService.getCredentialUserByEmail(payload.email);
    if (!user) {
      throw new Unauthorized(
        `Unauthorized! User with email ${payload.email} doesn't exist`,
      );
    }
    return user;
  }
}
