import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import GetMeDto from '../domains/dtos/profile-user.dto';
import { UserEntity } from '../domains/entities/user.entity';
import UserRegisterDto from '../domains/dtos/user-register.dto';

@Injectable()
export class UserService {
  constructor(
    // @Inject()
    private readonly userRepository: UserRepository,
  ) {}

  getCredentialUserByEmail = async (email: string) =>
    this.userRepository.findOneByEmail(email);

  getProfile = (user: UserEntity): GetMeDto => user as GetMeDto;

  findOneById = (id: number) => this.userRepository.findOneById(id);

  findByIds = (ids: number[]) => this.userRepository.findByIds(ids);

  register = async (userRegisterDto: UserRegisterDto) =>
    this.userRepository.register(userRegisterDto);

}
