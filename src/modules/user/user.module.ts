import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  // imports: [],
  controllers: [UserController],
  providers: [UserRepository, UserService, JwtService],
  exports: [UserService],
})
export class UserModule {}
